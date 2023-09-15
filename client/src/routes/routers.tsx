import { Navigate } from "react-router-dom";
import MenuComponent from "../layout/MenuComponent";
import Home from "../pages/user/Home";
import Login from "../pages/admin/Login";
import Page404 from "../@core/page404";
export interface RouterProps {
  [x: string]: any;
  path: string;
  component: React.ReactNode;
  icon?: React.ReactElement<any, any>;
  label?: string;
  routers?: RouterProps[];
}
const userRouter: RouterProps = {
  path: "/",
  component: <MenuComponent />,
  routers: [
    {
      path: "home",
      component: <Home />,
    },
  ],
};

const adminRouter: RouterProps[] = [
  {
    path: "/admin",
    component:
      1 / 2 === 2 ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <Navigate to="/" replace={true} />
      ),
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/404page",
    component: <Page404 />,
  },
  {
    path: "*",
    component: <Navigate to="/404page" />,
  },
];

const routers: RouterProps[] = [...adminRouter, userRouter];

export { userRouter, routers };
