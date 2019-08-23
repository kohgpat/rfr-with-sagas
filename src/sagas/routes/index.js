import { fork, take, select } from "redux-saga/effects";
import * as homeSaga from "../home";
import * as usersSaga from "../users";
import { routeType } from "../../store/routing/selectors";

const routesMap = {
  HOME: homeSaga.homeInit,
  USER: usersSaga.usersInit
};

export default function* routes() {
  const initialRoute = yield select(routeType);

  console.log("routes saga - initialRoute: ", initialRoute);

  if (routesMap[initialRoute]) {
    yield fork(routesMap[initialRoute]);
  }

  while (true) {
    const { type } = yield take(Object.keys(routesMap));
    console.log("Object.keys: ", Object.keys(routesMap));
    console.log("type: ", type);
    yield fork(routesMap[type]);
  }
}
