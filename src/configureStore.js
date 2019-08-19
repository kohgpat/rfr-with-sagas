import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import page from "./store/routing/pageReducer";
import routesMap from "./store/routing/routesMap";
import homeMiddleware from "./pages/Home/middleware";

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const middlewares = [middleware, homeMiddleware];

  const rootReducer = combineReducers({ page, location: reducer });
  const combinedMiddlewares = applyMiddleware(...middlewares);
  const enhancers = compose(
    enhancer,
    combinedMiddlewares
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
