import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <header className="py-5">
        <div className="container mx-auto flex justify-between">
          <Link to="/">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Bud
            </h1>
          </Link>
          <nav className="flex justify-center">
            {user && (
              <div className="flex align-center justify-center">
                <span className="self-center mr-4">
                  Welcome, {user.username}
                </span>
                <button
                  onClick={handleClick}
                  className="material-icons p-3 bg-darkaccent text-lightshade rounded-full"
                >
                  logout
                </button>
              </div>
            )}
            {!user && (
              <div className="my-auto">
                <Link className="mr-5" to="/login">
                  Login
                </Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
