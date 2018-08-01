import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedeEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(rootReducer, preloadedState, composedeEnhancer);
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers/rootReducer", () => {
      const newRootReducer = require("../reducers/rootReducer").default;
      store.replaceReducer(newRootReducer);
    });
  }
  return store;
};

export default configureStore;
