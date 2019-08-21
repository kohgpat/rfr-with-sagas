import { all, fork } from "redux-saga/effects";
// import home from "./home";
import { routes } from './routes';

export default function* rootSaga() {
  yield fork(routes);

  // yield all([home()]);
}
