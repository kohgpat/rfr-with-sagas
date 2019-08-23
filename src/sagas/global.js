import { all, select } from "redux-saga/effects";
import { getInitialized } from "../store/global/selectors";
import { delay } from "../utils";

export function* init() {
  console.log("global saga - init");

  const state = yield select(getInitialized);

  console.log("global saga init state: ", state);

  console.log('global saga init started');

  delay(1000).then(() => {
    console.log('global saga - init delayed');
  });

  // const event = getInitialized(state);
}

export default function* global() {
  console.log("global saga");
  yield all([init()]);
}
