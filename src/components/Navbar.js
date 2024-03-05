import React from "react";
import { Link } from "react-router-dom";
import logo from './../logo.svg';
const Navbar = () => {
  return (
    <div className="h-24 flex flex-row items-center justify-between p-6 shadow-lg">
      <div className="">
        <img src={logo} alt="" height={100} width={100} />
      </div>
      <div className="flex gap-5">
        <Link to='/' className="text-white text-2xl font-bold">Home</Link>
        <Link to='/about' className="text-white text-2xl font-bold">about</Link>
        <Link to='/test' className="text-white text-2xl font-bold">Test</Link>
      </div>
    </div>
  );
};

export default Navbar;
