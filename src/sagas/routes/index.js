import { all, spawn, takeEvery, call, select, take } from "redux-saga/effects";
// import homeSagas from '../home';
import homeSaga, * as homeSagas from "../home";
import { routeType } from "../../store/routing/selectors";

const routesMap = {
  // HOME: homeSagas.homeInit
  HOME: homeSaga
};

// function* handleRouteChange({ type }) {
//   console.log('handleRouteChange: ', type);

//   yield spawn(routesMap[type]);
// }

export function* routes() {
  console.log("routes saga");

  // const initialRoute = yield select(routeType);

  // console.log("initialRoute: ", initialRoute);

  // if (routesMap[initialRoute]) {
  //   yield spawn(routesMap[initialRoute]);
  // }

  // yield all([call(homeSagas)]);
  // yield call(homeSagas.homeInit)

  yield spawn(routesMap.HOME);

  while (true) {
    const { type } = yield take(Object.keys(routesMap));
    console.log("Object.keys: ", Object.keys(routesMap));
    console.log("type: ", type);
    // yield spawn(routesMap[type])
  }

  // yield takeEvery('HOME', handleRouteChange);
}
