import { all } from "redux-saga/effects";
import global from "./global";
import routes from "./routes";
import home from "./home";

export default function* rootSaga() {
  yield all([global(), home(), routes()]);
  // yield fork(routes);
}
