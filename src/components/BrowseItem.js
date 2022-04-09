import { EyeIcon, StarIcon, ViewListIcon } from "@heroicons/react/solid";
import React from "react";

function BrowseItem() {
  return(<React.Fragment>
    <div className="item p-3 flex justify-start gap-5">
      <div className="h-[240px] w-[150px] bg-gray-200">
        <span className="bg-orange-600 p-2 text-white text-sm absolute">#1</span>
      </div>
      <div className="font-sans info">
        <h2 className="font-bold text-lg">Two Sides Of The Light</h2>
        <h6 className="text-gray-400 text-xs font-bold">by R.A. Consell</h6>
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
        <p className="text-xs text-gray-500 w-[300px]">
        Volume 1: Pickpocketing Living in secret and stealing to eat is a hard life , but it's all Kuro has ever known. Fear and necessity honed him from a young age into the f...
        </p>
        <div className="grid grid-cols-4 gap-2 text-xs font-bold text-center">
          <span className="bg-orange-600 w-full rounded-sm px-2 py-1 text-white">Mature</span>
          <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">Paranormal</span>
          <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">spinechilling</span>
          <span className="bg-gray-300 w-full rounded-full px-2 py-1 text-white">thief</span>
          <span className="text-gray-500 font-extrabold text-xs">+10 more</span>
        </div>
      </div>
    </div>
  </React.Fragment>)
}

export default BrowseItem;