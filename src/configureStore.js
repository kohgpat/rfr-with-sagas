import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";
import createSagaMiddleware from "redux-saga";

import page from "./store/routing/pageReducer";
import routesMap from "./store/routing/routesMap";
import homeMiddleware from "./pages/Home/middleware";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

  const middlewares = [middleware, sagaMiddleware, homeMiddleware];

  const rootReducer = combineReducers({ page, location: reducer });

  const combinedMiddlewares = applyMiddleware(...middlewares);

  const enhancers = compose(
    enhancer,
    combinedMiddlewares,
    devtools
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(rootSaga);

  return { store };
}
