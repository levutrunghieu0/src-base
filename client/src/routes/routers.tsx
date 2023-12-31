import { Navigate } from "react-router-dom";
import MenuComponent from "../layout/MenuComponent";
import Home from "../pages/user/Home";
import Login from "../pages/admin/Login";
import Page404 from "../@core/page404";
import RequireAuth from "../auth/RequireAuth";
import ProDucts from "../pages/admin/Products";
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
      component: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
    },
  ],
};

const adminRouter: RouterProps[] = [
  {
    path: "/admin",
    component: (
      <RequireAuth>
        <MenuComponent />
      </RequireAuth>
    ),
    routers: [
      {
        path: "home",
        component: <Home />,
      },
      {
        path: "products",
        component: <ProDucts />,
      },
    ],
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

export { userRouter, routers, adminRouter };
