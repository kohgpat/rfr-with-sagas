import { all, put, takeEvery } from "redux-saga/effects";
import * as homeActions from "../../store/home/actions";

export function* homeInit() {
  console.log("home saga - homeInit");
  yield put(homeActions.homeInitSuccess("homeInitSuccess"));
}

export function* homeFlow() {
  console.log("home saga - flow");
  yield takeEvery(homeActions.HOME_INIT, homeInit);
}

export default function* home() {
  console.log("home saga");
  yield all([homeInit(), homeFlow()]);
}
