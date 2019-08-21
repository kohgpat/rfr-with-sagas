import { spawn, take, select } from "redux-saga/effects";
import homeSaga from "../home";
import usersSaga from "../users";
import { routeType } from "../../store/routing/selectors";

const routesMap = {
  HOME: homeSaga,
  USER: usersSaga
};

export function* routes() {
  const initialRoute = yield select(routeType);

  console.log("routes saga - initialRoute: ", initialRoute);

  if (routesMap[initialRoute]) {
    yield spawn(routesMap[initialRoute]);
  }

  while (true) {
    const { type } = yield take(Object.keys(routesMap));
    console.log("Object.keys: ", Object.keys(routesMap));
    console.log("type: ", type);
    yield spawn(routesMap[type]);
  }
}
