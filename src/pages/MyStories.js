import { ChatIcon, ChevronDownIcon, DotsHorizontalIcon, EyeIcon, LibraryIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MyStories() {
  const isEmpty = false;

  return(<React.Fragment>
    <Header />
    <div className="lg:mx-[200px] mx-[100px] my-20">
      <h1 className="font-sans font-bold text-3xl">My Stories</h1>
      <div className="rounded-md mt-5 shadow-md bg-white">
        {isEmpty ? <div className="py-10 px-3 grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8 text-center">
            <div className="flex items-center justify-center">
              <LibraryIcon className="h-[150px] text-gray-500" />
            </div>
            <h1 style={{fontSize:25}}>Hi, Hadi Partiv! You haven't writen any stories yet.</h1>
            <div className="flex items-center justify-center my-3">
              <NavLink to="/myworks/new" className="bg-orange-600 py-2 px-3 text-sm rounded-lg text-white flex items-center justify-center gap-2">
                <PlusIcon className="h-6" />
                Create a Story
              </NavLink>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div> : <React.Fragment>
          <div className="flex items-center justify-start border-b-[1px] border-gray-300">
            <div className="px-6 py-3 border-b-[5px] border-orange-500">
              <span className="font-semibold font-sans">All Stories</span>
            </div>
          </div>
          <div className="py-5 px-10">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex justify-start gap-4">
                <div className="h-[120px] w-[80px] bg-gray-200"></div>
                <div className="font-sans font-bold">
                  <h2 className="text-lg">Untitled story</h2>
                  <h5 className="text-gray-500 text-xs font-semibold">1 Draft</h5>
                  <h5 className="text-sm font-thin">Updated a minute ago</h5>
                  <div className="mt-3 flex items-center justify-start gap-3 text-gray-400 text-xs">
                    <span className="flex items-center">
                      <EyeIcon className="h-4" />
                      725k
                    </span>
                    <span className="flex items-center">
                      <StarIcon className="h-4" />
                      13.1k
                    </span>
                    <span className="flex items-center">
                      <ChatIcon className="h-4" />
                      11
                    </span>
                  </div>
                </div>
              </div>
              <div className="block space-y-4 text-xs">
                <button className="text-sm flex items-center justify-evenly gap-3 px-5 py-3 bg-orange-600 rounded-lg text-white">
                  Continue writing
                  <span>|</span>
                  <ChevronDownIcon className="h-6" />
                </button>
                <button className="p-3 rounded-md ring-2 ring-gray-200"><DotsHorizontalIcon className="h-4" /></button>
              </div>
            </div>
          </div>
        </React.Fragment>}
      </div>
    </div>
    <Footer />
  </React.Fragment>)
}