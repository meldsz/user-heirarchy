import { UserContextProvider } from "./contexts/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./common/routes";
import "./App.css";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
