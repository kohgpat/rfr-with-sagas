export default () => next => action => {
  next(action);

  console.log("Home middleware");
};
