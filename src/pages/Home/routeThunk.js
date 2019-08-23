// import * as homeActions from "../../store/home/actions";
function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

export default async (dispath, getState) => {
  console.log("home routeThunk");
  console.log("home routeThunk started");

  await delay(1000).then(() => {
    console.log("home routeThunk delayed");
  });
  // dispath(homeActions.homeInit());
};
