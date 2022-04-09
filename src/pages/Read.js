import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon, DotsHorizontalIcon, EyeIcon, LinkIcon, MailIcon, PlusIcon, StarIcon, UserCircleIcon, ViewListIcon } from "@heroicons/react/solid";
import React from "react";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Read() {
  const { storySlug } = useParams();
  // TODO: get story item from slug
  const storyTitle = storySlug.split('-').join(" ");


  return(<React.Fragment>
    <Header/>
    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 shadow-md border-b-2">
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <div className="h-10 w-5 bg-gray-200"></div>
                <div className="font-extrabold text-sm" style={{textTransform: 'capitalize'}}>
                  <h2>{storyTitle}</h2>
                  <span className="text-xs font-normal text-gray-500">by Lord_pasta</span>
                </div>
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
            <Menu.Items className="py-1 absolute left-2 w-56 mt-2 origin-top-right divide-y dark:divide-gray-400 divide-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 bg-gray-50">
              <div className="text-center">
                <h3 className="font-bold text-sm m-0" style={{textTransform:'uppercase'}}>{storyTitle}</h3>
                <span className="text-xs text-gray-400">Table of contents</span>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item as="div" className="py-2">
                  {({ active }) => (
                    <button to="/sd"  className={(active ? 'bg-orange-100 ' : '')+"w-full p-1 flex items-center gap-2"}>
                      <span className="text-sm">Chapter 1</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="flex items-center gap-2 justify-evenly">
        <button className="p-2 bg-orange-500 text-white rounded-lg">
          <PlusIcon className="h-6" />
        </button>
        <div className="bg-gray-400 w-[1px] h-10"></div>
        <StarIcon className="h-10 text-gray-400 hover:text-orange-500" />
      </div>
    </div>

    <div className="grid grid-cols-12 bg-white py-20 border-b-2">
      <div className="col-span-2"></div>
      <div className="col-span-8 text-center">
        <h1 className="font-bold text-3xl">Prolouge</h1>
        <div className="mt-3 flex items-center justify-center gap-4 text-gray-400 text-xs">
          <span className="flex items-center gap-2">
            <EyeIcon className="h-4" />
            725k
          </span>
          <span className="flex items-center gap-2">
            <StarIcon className="h-4" />
            13.1k
          </span>
          <span className="flex items-center gap-2">
            <ViewListIcon className="h-4" />
            11
          </span>
        </div>
        <div className="mt-5 pb-10 border-b-2">
          <div className="flex items-center justify-center ">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
          </div>
          <span className="font-bold">by <span className="text-orange-500">Lord_pasta</span></span>
        </div>
        <div className="paragraphs space-y-4 my-5">
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
          <p>ddsdsdsdd some random paragraphs</p>
        </div>
        <button className="w-full bg-orange-600 font-bold font-sans text-white p-4 rounded-lg flex items-center justify-center gap-2">
          Continue reading next part
          <ChevronRightIcon className="h-6" />
        </button>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2">
              <PlusIcon className="h-3" />Add
            </button>
            <button className="flex items-center gap-2">
              <StarIcon className="h-5 text-gray-600" />Vote
            </button>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <button className="flex items-center gap-2">
              <UserCircleIcon className="h-8" />
            </button>
            <button className="flex items-center gap-2">
              <MailIcon className="h-8" />
            </button>
            <button className="flex items-center gap-2">
              <LinkIcon className="h-6" />
            </button>
          </div>
        </div>
        <div className="mt-3 comment-section ">
          <form>
            <div className="grid grid-cols-12 items-center" style={{textAlign:'start'}}>
              <div className="col-span-1">
                <Avatar name="hadipartiv21" className="rounded-full text-sm" size="45" />
              </div>
              <div className="col-span-11">
                <input className="p-3 border-2 h-[50px] w-full rounded-lg" placeholder="Leave a comment" />
              </div>
            </div>
          </form>
          <div className="grid grid-rows-1 space-y-4">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-1">
                <Avatar name="hadipartiv21" className="rounded-full text-sm" size="30" />
              </div>
              <div className="col-span-10 font-sans" style={{textAlign:'start'}}>
                <h3 className="font-bold text-md m-0">Lord_pasta</h3>
                <small className="text-xs">Dec 23, 2019</small>
                <p className="text-sm text-gray-400">My first comment</p>
                <span className="text-orange-500 font-bold">Reply</span>
              </div>
              <div className="col-span-1">
                <DotsHorizontalIcon className="h-6" />
              </div>
            </div>
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-1">
                <Avatar name="hadipartiv21" className="rounded-full text-sm" size="30" />
              </div>
              <div className="col-span-10 font-sans" style={{textAlign:'start'}}>
                <h3 className="font-bold text-md m-0">Lord_pasta</h3>
                <small className="text-xs">Dec 23, 2019</small>
                <p className="text-sm text-gray-400">My first comment</p>
                <span className="text-orange-500 font-bold">Reply</span>
              </div>
              <div className="col-span-1">
                <DotsHorizontalIcon className="h-6" />
              </div>
            </div>
          </div>
          <button className="my-3 w-full bg-gray-300 font-sans text-black p-4 rounded-lg flex items-center justify-center gap-2">
            Show More
            <ChevronDownIcon className="h-6" />
          </button>
        </div>

        <div className="my-3 border-t-2">
          <h3 className="text-lg">Recommendations</h3>
          <div className="flex items-center justify-start gap-2" style={{textAlign:'start'}}>
            <div>image</div>
            <div className="font-sans">
              <h3>Bottom Dollar</h3>
              <h3>by officialrachealrose</h3>
              <div className="mt-3 flex items-center justify-start gap-4 text-gray-400 text-xs">
                <span className="flex items-center gap-2">
                  <EyeIcon className="h-4" />
                  725k
                </span>
                <span className="flex items-center gap-2">
                  <StarIcon className="h-4" />
                  13.1k
                </span>
                <span className="flex items-center gap-2">
                  <ViewListIcon className="h-4" />
                  11
                </span>
              </div>
              <div className="my-3">
                <p className="text-xs">dsdsdsdsdsdsdsds.dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="col-span-2"></div>
    </div>
    <Footer/>
  </React.Fragment>)
}