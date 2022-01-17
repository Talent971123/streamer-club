import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0';
import { initializeApollo } from 'api/apollo';
import { query } from "graphql/user";


const afterCallback = async (req, res, session, state) => {

    /** get user info
     * use openid session.user.sub
    */
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: query.GET_USER,
        variables: { auth_id: session.user.sub }
    })

    /** Add more user information to Auth0 session */
    session.user = { ...session.user, ...data.users[0] }

    /** remove a session value */
    delete session.refreshToken;
    delete session.sub;

    return session;
};


const getLoginState = (req, loginOptions) => {
    return {
        returnTo: req.headers.referer,
    }
}


export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            /** TODO: define a catch */
            console.log(error)
            // res.status(error.status || 500).end(error.message);
        }
    },
    async login(req, res) {
        await handleLogin(req, res, { getLoginState });
    },
});