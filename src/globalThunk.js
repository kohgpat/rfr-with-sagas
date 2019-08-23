import { delay } from "./utils";

export default async (dispath, getState) => {
  console.log("global thunk");
  console.log("global thunk started");

  await delay(2000).then(() => {
    console.log("global thunk delayed");
  });
};
