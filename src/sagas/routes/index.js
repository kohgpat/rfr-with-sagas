import { spawn, take } from "redux-saga/effects";
import homeSaga from "../home";

const routesMap = {
  HOME: homeSaga
};

export function* routes() {
  console.log("routes saga");

  yield spawn(routesMap.HOME);

  while (true) {
    const { type } = yield take(Object.keys(routesMap));
    console.log("Object.keys: ", Object.keys(routesMap));
    console.log("type: ", type);
  }
}
