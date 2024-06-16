import "./App.css";
import { getAuth } from "firebase/auth";

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header/header";
import Home from "./components/home/home";

import { AuthProvider } from "./auth/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routes = useRoutes(routesArray);
  return (
    <div>
      <AuthProvider>
        <Header />
        <div>{routes}</div>
      </AuthProvider>
    </div>
  );
}

export default App;
