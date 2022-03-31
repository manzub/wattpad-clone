import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return(<React.Fragment>
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-orange-700 to-orange-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-orange-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-orange-600">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you're looking for doesn't exist.
          </p>

          <NavLink to="/" className="px-6 py-2 text-sm font-semibold text-orange-800 bg-orange-100">
            Go home
          </NavLink>
        </div>
      </div>
    </div>
  </React.Fragment>)
}

export default Page404;