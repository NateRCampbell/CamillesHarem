import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authContext";
import { executeSignOut } from "../../firebase/firebaseAuth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav>
      {userLoggedIn ? (
        <>
          <button
            onClick={() => {
              executeSignOut().then(() => {
                navigate("/login");
              });
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register New Account</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
