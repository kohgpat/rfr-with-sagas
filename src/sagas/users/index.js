import { all, put, takeEvery } from "redux-saga/effects";
import * as usersActions from "../../store/users/actions";

export function* usersInit() {
  console.log("users saga - usersInit");
  yield put(usersActions.usersInitSuccess("usersInitSuccess"));
}

export function* usersFlow() {
  console.log("users saga - flow");
  yield takeEvery(usersActions.USERS_INIT, usersInit);
}

export default function* users() {
  console.log("users saga");
  yield all([usersInit(), usersFlow()]);
}
