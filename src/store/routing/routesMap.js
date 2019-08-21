import homeRouteThunk from "../../pages/Home/routeThunk";

const routesMap = {
  HOME: {
    path: '/',
    thunk: homeRouteThunk
  },
  USER: "/user/:id"
};

export default routesMap;
