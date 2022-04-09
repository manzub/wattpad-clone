import { Dialog, Transition } from "@headlessui/react";
import { EyeIcon, PlusIcon, StarIcon, ViewListIcon, XIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PreviewItem({ item, onClose }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    if(item) { setOpen(true) }
    else { setOpen(false) }
  }, [item])

  return(<Transition.Root show={open} as={React.Fragment}>
    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
      <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{fontSize: 0}}>
      <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-[600px] md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="rounded-lg aspect-w-2 aspect-h-3 bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={item?.imageSrc} alt={item?.imageAlt} className="object-center object-cover" />
                  </div>
                  <div className="sm:col-span-6 lg:col-span-5">
                    <h2 className="text-lg font-semibold text-gray-900 sm:pr-12">{item?.name}</h2>
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
                    <section aria-labelledby="information-heading" className="mt-2">
                      <div className="flex items-center gap-2">
                        <button onClick={() => navigate('/story/sample-story-1')} className="px-3 py-2 hover:bg-orange-700 bg-orange-600 rounded-md text-sm flex-1 text-white">Read</button>
                        <button className="px-2 py-[7px] hover:bg-orange-700 bg-orange-600 rounded-md text-sm text-white"><PlusIcon className="h-6" /></button>
                      </div>

                      <p className="my-3 text-xs text-gray-600">*** The Vision was shortlisted for the Watty India Awards 2019 under the horror/paranormal category.*** This is a supernatural adventure story of Abhay along with his childhood friend Vipul. Abhay has some visions which...</p>
                      <span className="text-xs text-orange-500">More</span>
                      <div className="grid grid-cols-4 gap-2 text-xs font-bold text-center">
                        <span className="bg-orange-600 w-full rounded-sm px-2 py-1 text-white">Mature</span>
                        <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">Paranormal</span>
                        <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">spinechilling</span>
                        <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">thief</span>
                        <span className="text-gray-500 font-extrabold text-xs">+10 more</span>
                      </div>
                    </section>

                    
                  </div>
                  <div className="sm:col-span-2 lg:col-span-2"></div>
                </div>
              </div>
            </div>
          </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>)
}