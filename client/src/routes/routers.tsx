import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
export interface RouterProps {
  [x: string]: any;
  path: string;
  component: React.ReactNode;
  icon?: React.ReactElement<any, any>;
  label?: string;
  routers?: RouterProps[];
}
const homeRouter: RouterProps[] = [
  {
    path: "home",
    component: <Home />,
  },
];

const routers: RouterProps[] = [...homeRouter];

export { homeRouter, routers };
