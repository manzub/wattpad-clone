import { CurrencyDollarIcon } from "@heroicons/react/solid";
import React from "react";
import { paddInset } from "../constants";

function PreferenceItems() {
  return(<React.Fragment>
    <div className={paddInset+"my-5 text-black"}>
        <h1 className="font-extrabold text-3xl" style={{fontFamily:'Poppins'}}>Because You Like <span className="hover:text-orange-600 text-gray-600 cursor-pointer">Historical Fiction</span></h1>
        <p style={{margin:0}} className="font-bold text-gray-400">Based on your favorite genres</p>
        <div className="my-2 grid grid-cols-5 gap-3">
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-400">history</span>
            </div>
          </div>
          
        </div>
      </div>
  </React.Fragment>)
}

export default PreferenceItems;