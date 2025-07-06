import { Login } from "../pages/LoginPage/LoginPage";
import { Heirarchy } from "../pages/HeirarchyPage/HeirarchyPage";
import { NotFound } from "../components/NotFound/NotFound";

export const routes = [
  { path: "/", Component: Login },
  {
    path: "heirarchy",
    Component: Heirarchy,
  },
  { path: "*", Component: NotFound },
];
