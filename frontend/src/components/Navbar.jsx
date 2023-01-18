import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="py-5">
        <div className="container mx-auto flex justify-between">
          <Link className="text-4xl font-bold" to="/">
            <h1>Bud</h1>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
