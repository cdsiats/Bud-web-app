import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="py-8">
        <div className="container mx-auto flex justify-between">
          <Link to="/">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Bud
            </h1>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
