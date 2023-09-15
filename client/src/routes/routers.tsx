import { Navigate } from "react-router-dom";
import MenuComponent from "../layout/MenuComponent";
import Home from "../pages/user/Home";
import Login from "../pages/admin/Login";
export interface RouterProps {
  [x: string]: any;
  path: string;
  component: React.ReactNode;
  icon?: React.ReactElement<any, any>;
  label?: string;
  routers?: RouterProps[];
}
const userRoter: RouterProps[] = [
  {
    path: "/",
    component: <MenuComponent />,
    routers: [
      {
        path: "home",
        component: <Home />,
      },
    ],
  },
  {
    path: "login",
    component: <Login />,
  },
];

const routers: RouterProps[] = [...userRoter];

export { userRoter, routers };
