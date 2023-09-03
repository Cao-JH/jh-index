import { useRoutes, RouteObject, Navigate } from "react-router-dom";

import Home from "../view/Home";
import Error from "./../view/Error";

/**
 * 定义路由数组并暴露出去
 *  若是需要在侧边栏可以导航，添加label属性即可
 */
export const routeArr: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/404",
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

// 定义useRoutes钩子方法并暴露出去
export const GetRouters = () => useRoutes(routeArr);
