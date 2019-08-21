import { all, put, takeEvery } from "redux-saga/effects";
import * as homeActions from "../../store/home/actions";

export function* homeInit() {
  console.log("homeInit saga");

  yield put(homeActions.homeInitSuccess("homeInitSuccess"));
}

export function* homeFlow() {
  yield takeEvery(homeActions.HOME_INIT, homeInit);
}

export default function* home() {
  yield all([homeFlow()]);
}
