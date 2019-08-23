import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import page from "./store/routing/pageReducer";
import routesMap from "./store/routing/routesMap";
import homeMiddleware from "./pages/Home/middleware";

import rootSaga from "./sagas/rootSaga";
// import rootReducer from "./store/rootReducer";
import global from "./store/global";
import globalThunk from "./globalThunk";
// import homeRouteThunk from "./pages/Home/routeThunk";

const sagaMiddleware = createSagaMiddleware();

export default async function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

  const middlewares = [thunk, middleware, sagaMiddleware, homeMiddleware];

  // console.log('rootReducer: ', ...rootReducer());

  const initialReducer = combineReducers({
    page,
    location: reducer,
    global
    // ...rootReducer()
  });

  const combinedMiddlewares = applyMiddleware(...middlewares);

  const enhancers = compose(
    enhancer,
    combinedMiddlewares,
    devtools
  );

  const store = createStore(initialReducer, preloadedState, enhancers);

  // store.dispatch({ type: "GLOBAL_INIT" });

  await store.dispatch(globalThunk);

  // console.log("after dispatch: ", store.getState());

  sagaMiddleware.run(rootSaga);

  // await thunk(store);

  return { store };
}
