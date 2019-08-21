import { all, spawn, takeEvery, call } from 'redux-saga/effects';
// import homeSagas from '../home';
import * as homeSagas from '../home';

const routesMap = {
  'HOME': homeSagas.homeInit
};

// function* handleRouteChange({ type }) {
//   console.log('handleRouteChange: ', type);

//   yield spawn(routesMap[type]);
// }

export function* routes() {
  console.log('routes saga');

  // yield all([call(homeSagas)]);
  // yield call(homeSagas.homeInit)

  yield spawn(routesMap['HOME'])

  // while (true) {
    // yield spawn(routesMap['HOME'])
  // }

  // yield takeEvery('HOME', handleRouteChange);
}