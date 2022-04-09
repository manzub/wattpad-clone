import { Menu, Transition } from "@headlessui/react";
import { CheckCircleIcon, ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";
import BrowseItem from "../components/BrowseItem";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Browse() {
  const paddInset = "mx-[80px] lg:mx-[250px] my-8 "
  return(<React.Fragment>
    <Header/>
    {/* main comp */}
    <div className={paddInset+""}>
      <h1 className="text-4xl font-semibold">Action Stories</h1>
      <div className="my-3 bg-white shadow-md rounded-md p-4">
        <h3>Refine by tag:</h3>
        <div className="grid grid-cols-6 gap-2 my-3">
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
          <span className="text-xs ring-2 ring-gray-200 bg-gray-100 py-2 rounded-full flex items-center justify-evenly">
            sdsdsds
            <PlusIcon className="h-4" />
          </span>
        </div>
      </div>

      <div className="my-3 bg-white shadow-md rounded-md p-4">
        {/* header and filter */}
        <div className="flex items-center justify-between font-semibold">
          <span>1.5k stories</span>
          <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium">
              <div className="flex items-center gap-0">
                <span className="font-extrabold text-sm">Sort by:</span>
                <span>Hot</span>
                <ChevronDownIcon className="w-5 h-5 -mr-1" aria-hidden="false" />
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="p-3 absolute right-2 w-56 mt-2 origin-top-right divide-y dark:divide-gray-400 divide-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 bg-white">
              <div className="px-1 py-1 ">
                <Menu.Item as="div" className="my-1">
                  {({ active }) => (
                    <span to="/sd"  className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex items-center gap-2"}>
                      <span className="text-sm">Hot</span>
                      <CheckCircleIcon className="h-6 text-teal-600" />
                    </span>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item as="div" className="my-1">
                  {({ active }) => (
                    <span to="/sd" className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex"}>
                      <span className="text-sm">New</span>
                    </span>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
        <hr/>
        <div className="grid lg:grid-cols-2 gap-4">
          <BrowseItem/>
          <BrowseItem/>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>)
}

export default Browse;