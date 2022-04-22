import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const index = () => {
  const location = useLocation();
  const urlCurrent = location.pathname;
  return (
    <div className="lg:flex lg:min-h-screen">
      <div className="lg:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Client
        </h2>
        <div className="mt-10">
          <Link
            to="/client"
            className={`${
              urlCurrent === "/client" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            Client
          </Link>
          <Link
            to="/client/new"
            className={`${
              urlCurrent === "/client/new" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            New Client
          </Link>
        </div>
      </div>
      <div className="lg:w-3/4 p-2 lg:p-10 scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default index;
