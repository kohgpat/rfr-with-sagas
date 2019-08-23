import * as homeActions from "../../store/home/actions";
import { delay } from "../../utils";

export default async (dispath, getState) => {
  console.log("home routeThunk");
  console.log("home routeThunk started");

  await delay(2000).then(() => {
    console.log("home routeThunk delayed");
    dispath(homeActions.homeInit());
  });
};
