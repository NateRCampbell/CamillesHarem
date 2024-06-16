import React from "react";
import { useAuth } from "../../auth/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      Hello
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in.
    </div>
  );
};

export default Home;
