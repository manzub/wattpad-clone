import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, LightningBoltIcon, MoonIcon, SearchIcon, SunIcon, ViewGridIcon } from "@heroicons/react/solid";
import React from "react";
import Avatar from "react-avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const navigate = useNavigate();
  const { theme, setTheme } = React.useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  return(<React.Fragment>
    <div className="px-1 font-bold font-sans flex items-center justify-between h-[56px] border-gray-300 sticky top-0 z-50 bg-gray-50 dark:bg-gray-700" style={{borderBottomWidth:'1px'}}>
      <div className="flex items-center justify-evenly gap-2">
        <img onClick={() => navigate('/')} className="cursor-pointer w-[126px]" src="/wp-logo-orange.png" alt="imf" />
        {/* quick links */}
        <NavLink to="/stories">Browse</NavLink>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" className="p-1 focus:outline-none focus:shadow-outline">
              <SearchIcon className="h-6 dark:text-black" />
            </button>
          </span>
          <input type="search" className="w-[400px] focus:bg-orange-600 focus:bg-opacity-10 bg-transparent dark:text-black py-2 text-sm rounded-md pl-10 focus:outline-0" placeholder="Search..." autoComplete="off" />
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-2">
        {/* write options */}
        <Menu as="div" className="relative hidden lg:inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium">
              <div className="flex items-center gap-0">
                <span className="font-extrabold text-sm">Write</span>
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
            <Menu.Items className="p-3 absolute right-2 w-56 mt-2 origin-top-right divide-y dark:divide-gray-400 divide-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 bg-gray-50">
              <div className="px-1 py-1 ">
                <Menu.Item as="div" className="my-3">
                  {({ active }) => (
                    <NavLink to="/myworks/new"  className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex items-center gap-2"}>
                      <ViewGridIcon className="h-6" />
                      <span className="text-sm">Create New Story</span>
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="my-3">
                  {({ active }) => (
                    <NavLink to="/myworks" className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex"}>
                      <span className="text-sm">My stories</span>
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* premium option */}
        <button className="flex flex-shrink-0 bg-indigo-900 p-2 rounded-full px-5 text-white items-center justify-center text-sm">
          <LightningBoltIcon className="h-6 text-orange-600" />
          <span className="font-extrabold">Try Premium</span>
        </button>
        {/* account menu */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium">
              <Avatar className="rounded-full font-bold text-lg" size="35" name="hadipartiv21" />
              <div className="flex items-center gap-0">
                <span className="hidden lg:block font-extrabold text-sm">hadipartiv21</span>
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
            <Menu.Items className="p-3 absolute right-2 w-40 mt-2 origin-top-right divide-y dark:divide-gray-400 divide-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 bg-gray-50">
              <div className="px-1 py-1 ">
                <Menu.Item as="div" className="my-2">
                  {({ active }) => (
                    <NavLink to="/sd" className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex"}>My Profile</NavLink>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item as="div" className="my-2">
                  {({ active }) => (
                    <button 
                      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')} 
                      className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex items-center gap-2"}>
                      { isDarkMode ? <SunIcon className="h-6" /> : <MoonIcon className="h-6" />}
                      <span>Theme</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="my-3">
                  {({ active }) => (
                    <NavLink to="/sd" className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex"}>Help</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="my-3">
                  {({ active }) => (
                    <NavLink to="/sd" className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex"}>Settings</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="my-3">
                  {({ active }) => (
                    <NavLink to="/sd" className={(active ? 'bg-orange-400 ' : '')+"w-full p-1 flex"}>Logout</NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  </React.Fragment>)
}

export default Header;