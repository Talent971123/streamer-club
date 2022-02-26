import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const makeStore = (): any => {
  const middleware = [thunk];
  const middleWareEnhancer = applyMiddleware(...middleware);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
};

export const wrapper = createWrapper(makeStore);
