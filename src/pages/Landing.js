import { AdjustmentsIcon, ChevronRightIcon, CurrencyDollarIcon, PlusIcon, ViewListIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreferenceItems from "../components/PrefernceItems";
import PreviewItem from "../components/PreviewItem";
import { paddInset } from "../constants";

const story = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

const Landing = () => {
  const [preview, setPreviewItem] = useState(null);

  return(<React.Fragment>
    <Header/>
    {/* main comp */}
    <div>
      {/* carousel first */}
      <Carousel />
      <div className={paddInset+""}></div>
      {/* greetings div */}
      <div className={paddInset+"greetings-and-content-pref"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-black">
            <h2 className="text-3xl">welcome home,&nbsp;</h2>
            <h2 className="text-3xl">hadipartiv21</h2>
          </div>
          {/* TODO: preferences button */}
          <button className="flex items-center text-black">
            <AdjustmentsIcon className="h-6 rotate-90" />
            <span className="font-extrabold font-sans">Content Preferences</span>
          </button>
        </div>
        <hr style={{margin:15}}/>
      </div>
      {/* TODO: pass items preference 1 div */}
      <PreferenceItems />
      {/* top read 1 */}
      <div className={"top-read px-20 lg:px-[320px] py-10 bg-white dark:bg-gray-800"}>
        <div className="flex gap-4">
          <div className="bg-gray-400 shadow-md rounded-lg h-[373px] w-[238px]">image</div>
          <div className="m-4 flex-1">
            <p className="text-sm font-bold font-sans text-orange-500">New</p>
            <h1 className="font-bold text-3xl font-sans">Lead Me Astray</h1>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-sans">
              <CurrencyDollarIcon className="h-6" />
              <div className="flex items-center">
                <ViewListIcon className="h-6" />
                124 parts
              </div>
              <span className="bg-teal-800 font-bold px-3 py-1 text-white rounded-full">complete</span>
              <span className="bg-red-800 font-bold px-3 py-1 text-white rounded-full">Mature</span>
            </div>
            <div className="my-5 flex items-center gap-2 font-sans">
              <button className="px-5 py-2 font-bold text-white bg-gray-900 rounded-full">Free preview</button>
              <div className="p-2 bg-gray-200 dark:text-gray-800 rounded-full">
                <PlusIcon className="h-6"/>
              </div>
            </div>
            <p className="text-xs">Lead Me Astray is now published as a Wattpad Book! As a Wattpad reader, you can access Wattpad Books Edition upon purchase and the Original Edition for free. "Ambitious and fiercely original. Sondi Warner is the exciting new voice we've all been waiting for." - Carmen Ho @ HQ When Aurie d...</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center font-sans font-bold">
                More Details
                <ChevronRightIcon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="top-read px-20 lg:px-[250px] py-10 bg-blue-50 dark:bg-gray-600">
        <h1 className="font-extrabold text-3xl font-sans">Paid Stories</h1>
        <p style={{margin:0}} className="font-bold text-gray-400">New and Noteworthy stories</p>
        <div className="my-2 grid grid-cols-5 gap-3">
          <div onClick={() => setPreviewItem(story)} className="pref-item">
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
        <div className="flex items-center justify-center my-10">
          <button className="px-5 py-4 bg-gray-300 dark:bg-gray-700 shadow-sm rounded-full text-sm font-bold">See all ad-free stories</button>
        </div>
      </div>

      <PreferenceItems />

      <div className={"px-20 lg:px-[250px] py-10 bg-yellow-50 dark:bg-gray-600"}>
        <h1 className="font-extrabold text-3xl font-sans">Talk of the town</h1>
        <p style={{margin:0}} className="font-bold text-gray-400">Stories sparking conversation</p>
        <div className="p-10 my-5 rounded-md shadow-md bg-white dark:bg-gray-700">
          <div className="flex items-center gap-4">
            <div className="bg-gray-400 shadow-md rounded-lg h-[300px] w-[208px]">image</div>
            <div className="m-4 flex-1 dark:text-black">
              <h1 className="font-bold text-3xl font-sans">Vampire's Pet</h1>
              
              <p className="text-sm">The world had gone to hell long ago, taken over by the vampire race. In order to keep some sort of peace in our land, the Vampire Lords made a consecutive agreement. The rich and powerful humans could survive just as they had been, untouched by the vampires save for the occasional blood collections, or so they thought In reality, we were all under their control. Castles spread out throughout our land, one landing in each city. Each castle varied in the number of vampires residing there, but al...</p>
              <div className="mt-3 flex items-center justify-start gap-2">
                <span className="bg-gray-100 dark:bg-gray-500 px-3 py-1 rounded-full text-xs">slowburn</span>
                <span className="bg-gray-100 dark:bg-gray-500 px-3 py-1 rounded-full text-xs">slowburn</span>
                <span className="bg-gray-100 dark:bg-gray-500 px-3 py-1 rounded-full text-xs">slowburn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 grid grid-cols-5 gap-3">
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-400">history</span>
            </div>
          </div>
          
          <div className="pref-item">
            <div className="h-[278px] bg-gray-400 rounded-lg shadow-md">image</div>
            <div className="mt-2 flex items-center gap-2">
              <CurrencyDollarIcon className="h-6" />
              {/* tag */}
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-400">history</span>
            </div>
          </div>
          
        </div>


      <PreviewItem item={preview} onClose={() => setPreviewItem(null)} />
      </div>
      <Footer />
    </div>
  </React.Fragment>)
}

export default Landing;