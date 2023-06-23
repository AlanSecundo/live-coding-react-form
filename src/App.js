import { createBrowserRouter, RouterProvider } from "react-router-dom";

import OnboardScreen from "./screens/onboardScreen";
import UserScreen from "./screens/usersScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnboardScreen />,
  },
  {
    path: "/list",
    element: <UserScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
