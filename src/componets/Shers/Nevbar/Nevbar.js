import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import PrimaryButton from "../../Buttons/PrimaryButton";

const Nevbar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogin = () => {
    logOut().then().catch();
  };

  const menu = (
    <>
      <Link className="btn btn-ghost font-sans btn-sm " to="/">
        Home
      </Link>
      <Link className="btn btn-ghost font-sans btn-sm " to="/mobileCasing">
        Casing
      </Link>
      <Link className="btn btn-ghost font-sans btn-sm " to="/blog">
        Blog
      </Link>
      <Link className="btn btn-ghost font-sans btn-sm " to="/dashboard">
        DashBoard
      </Link>

      {user?.uid ? (
        <>
          <div onClick={handleLogin}>
            <PrimaryButton classes="btn btn-ghost font-serif btn-sm w-full">
              log Out
            </PrimaryButton>
          </div>
        </>
      ) : (
        <>
          <Link className="btn btn-ghost font-serif btn-sm " to="/register">
            singUp
          </Link>
          <Link className="btn btn-ghost font-serif btn-sm " to="/login">
            LogIn
          </Link>
        </>
      )}
    </>
  );

  // Mobile Planet

  //Admin:-
  //Email: pronoybanik@gmail.com
  //pass: 112233

  //seller:-
  //Email:pornoy@gmail.com
  //pass: 112233

  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            className="btn btn-ghost normal-case text-xl btn-sm font-serif text-gray-600"
            to="/"
          >
            MOBILE .<p className="text-amber-600">PLANET</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        <label
          htmlFor="drawer-box"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nevbar;
