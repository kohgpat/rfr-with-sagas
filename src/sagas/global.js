import { all, select, take } from "redux-saga/effects";
import { getInitialized } from "../store/global/selectors";

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

export function* init() {
  console.log("global saga - init");

  const state = yield select(getInitialized);

  console.log("global saga - state: ", state);

  console.log('started');

  delay(1000).then(() => {
    console.log('delayed');
  });

  // const event = getInitialized(state);
}

export default function* global() {
  console.log("global saga");
  yield all([init()]);
}
