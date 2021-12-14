import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  ApolloLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import fetch from "isomorphic-unfetch";

const SERVER: string =
  process.env.NEXT_PUBLIC_CONTENT_DELIVERY_GRAPHQL_API || "";
const AccessToken: string = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
const SOCKET: string = process.env.NEXT_PUBLIC_CONTENT_SOCKET_API || "";

const authLink = setContext((_, { headers }) => {
  // const token = getToken();
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": AccessToken,
    },
  };
});
const ssrMode = !process.browser;

const httpLink: ApolloLink = new HttpLink({
  fetch,
  credentials: "same-origin",
  uri: SERVER, //'http://localhost:3000/graphql'
});

let splitLink = httpLink;

if (!ssrMode) {
  const wsLink: WebSocketLink = new WebSocketLink({
    uri: SOCKET, // "ws://localhost:3000/subscriptions"
    options: { reconnect: true },
  });

  splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    authLink.concat(wsLink),
    authLink.concat(httpLink)
  );
}

let apolloClient: any;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // set to true for SSR
    link: splitLink,
    cache: new InMemoryCache(),
  });
};

// eslint-disable-next-line @typescript-eslint/ban-types
export function initializeApollo(initialState: null | Object = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
