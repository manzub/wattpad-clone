import { Popover, Switch, Transition } from "@headlessui/react";
import { ChevronLeftIcon, InformationCircleIcon, MinusIcon, PhotographIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";
import Select from "react-select";
import Footer from "../components/Footer";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function NewStory() {
  const fileInputRef = React.createRef();
  const descTxtAreaRef = React.createRef();

  const [form, updateForm] = React.useState({ title: "" })
  const [mainCharacters, updateMcs] = React.useState([{name: ""}]);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isMature, setMature] = React.useState(false)


  function removeMcInput(index) {
    const list = [...mainCharacters];
    list.splice(index, 1);
    updateMcs(list);
  }

  function addingMcInfo(e, index) {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...mainCharacters];
    list[index][name] = value;
    updateMcs(list);
  }

  return(<React.Fragment>
    <div className="px-1 font-bold font-sans flex items-center justify-between h-[56px] border-gray-300 sticky top-0 z-50 bg-white dark:bg-gray-700" style={{borderBottomWidth:'1px'}}>
      <div className="flex items-center justify-start gap-3">
        <ChevronLeftIcon className="h-10 text-gray-400" />
        <div className="block">
          <small className="text-gray-400 text-xs font-normal">Add story info</small>
          <h2 className="font-bold text-lg">Untitled story</h2>
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-3 mx-5">
        <button className="bg-gray-200 rounded-lg text-sm px-3 py-2">Cancel</button>
        <button className="bg-orange-600 text-white rounded-lg text-sm px-5 py-2">Skip</button>
      </div>
    </div>
    <div className="mx-10 my-5">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <div className="flex items-center justify-center">
            <div className="h-[400px] w-[250px] bg-gray-300 rounded-sm shadow-md">
              <div className="grid place-items-center h-full">
                <div>
                  <PhotographIcon onClick={() => fileInputRef.current.click()} className="cursor-pointer h-20 text-gray-400"/>
                  <span>Add a cover</span>
                  <input type="file" className="hidden" ref={fileInputRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 mx-4 ">
          <div className="bg-white shadow-md rounded-lg" style={{marginLeft:20}}>
            <div className="flex items-center justify-start border-b-[1px] border-gray-300">
              <div className="px-6 py-3 border-b-[5px] border-orange-500">
                <span className="font-semibold font-sans">Story Details</span>
              </div>
            </div>
            <div className="px-6 py-5 font-sans">
              <div>
                <label className="block font-semibold text-lg">Title</label>
                <input type="text" placeholder="Untitled story"
                  className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" 
                />
              </div>
              <div className="mt-5">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Description</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Add a story description</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Stories with descriptions get 100x more reads than ones without</p>
                              <p className="font-normal text-gray-500 pb-3 border-b-2" style={{fontSize:10}}>Write a short description that will excite your readers and hook them in</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <button onClick={() => descTxtAreaRef.current.focus()} className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <textarea onChange={(event) => updateForm({ ...form, description:event.target.value })} ref={descTxtAreaRef} rows={8} style={{resize:'none'}}
                  className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" 
                />
              </div>

              <div className="mt-5 w-[350px] text-xs">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Main Characters</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Who are your main characters?</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Add up to 20 Main Characters. This information will not be shown to your readers. Instead, this information will be used to help Wattpad more easily discover your story.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                {mainCharacters.map((item, idx) => (<div key={idx} className="flex items-center justify-start gap-3">
                  <input type="text" placeholder="Name" name="name"
                    onChange={(e) => addingMcInfo(e, idx)}
                    value={item.name}
                    className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" 
                  />
                  {idx === mainCharacters.length-1 ? <button
                    disabled={item.name === ""}
                    onClick={() => updateMcs([ ...mainCharacters, { name: "" } ])} 
                    className={`${mainCharacters[idx].name !== "" ? 'bg-orange-600 text-white' : 'bg-gray-300 text-blakc'} p-3 rounded-md`}>
                    <PlusIcon className="h-4" />
                  </button> : mainCharacters.length !== 1 && <button 
                    onClick={() => removeMcInput(idx)} 
                    className={`${mainCharacters[idx] ? 'bg-orange-600 text-white' : 'bg-gray-300 text-blakc'} p-3 rounded-md`}>
                    <MinusIcon className="h-4" />
                  </button>}
                </div>))}
              </div>

              <hr/>
              <div className="mt-4 w-[300px] flex items-center justify-start gap-4">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Category</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Tell Wattpad the category of your story</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>This information helps us understand more about your story.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <select className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" >
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Romance</option>
                  <option>Fantasy</option>
                </select>
              </div>

              <hr/>
              <div className="mt-4 mb-4">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Tags</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Help readers find your story</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Adding 10 or more tags can help increase discoverability</p>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Tags should be a word or concept, reflective of your story's themes and subgenres</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <Select classNamePrefix="bg-gray-100" isMulti defaultValue={selectedOption} options={options} onChange={setSelectedOption} />
              </div>

              <hr/>
              <div className="mt-4 w-[300px] flex items-center justify-start gap-4">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Target Audience</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Who is this story for?</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>This information will not be shown to your readers. Instead, this information will be used to help Wattpad more easily discover your story.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <select className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" >
                  <option>Teenager</option>
                  <option>Adult</option>
                  <option>All ages</option>
                </select>
              </div>

              <hr/>
              <div className="mt-4 w-[300px] flex items-center justify-start gap-4">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Language</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">What language is your story in?</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Wattpad has a global audience; make sure your story reaches the right readers</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <select className="dark:bg-gray-600 w-full px-4 py-2 mt-2 border rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500" >
                  <option>English</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              <hr/>
              <div className="mt-4">
                <div className=" w-[300px] flex items-center justify-start gap-4">
                <label className="flex items-center justify-start gap-3 font-semibold text-lg">
                  <span>Rating</span>
                  <div>
                    <Popover className="relative">
                      {({ open }) => (<>
                        <Popover.Button className={`${open ? '' : 'text-opacity-90'} text-gray-600 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <InformationCircleIcon className="h-5" />
                        </Popover.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-[250px] max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-2xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-2 bg-white py-3 px-2 lg:grid-cols-2 text-xs">
                              <h2 className="font-semibold mb-5">Rate your story</h2>
                              <p className="font-normal text-gray-500" style={{fontSize:10}}>Rate your story appropriately to ensure a positive reading experience for your readers with no unwanted surprises</p>
                              <div className="flex items-center justify-between">
                                <span className="text-orange-500">Learn more</span>
                                <Popover.Button as="button" className="px-3 py-2 bg-indigo-700 text-white rounded-md">OK</Popover.Button>
                              </div>
                            </div>  
                          </div>  
                          </Popover.Panel>  
                        </Transition>
                      </>)}
                    </Popover>
                  </div>
                </label>
                <span className="text-gray-500">Mature</span>
                <Switch checked={isMature} onChange={setMature} className={`bg-white ring-1 ring-gray-200 relative inline-flex flex-shrink-0 h-[50px] w-[100px] rounded-sm cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`} >
                  <span className="sr-only">Use setting</span>
                  <span aria-hidden="true"
                    className={`${isMature ? 'translate-x-0 bg-teal-500 text-white' : 'translate-x-[50px]'}
                      pointer-events-none flex items-center justify-center h-full w-[50px] rounded-sm bg-gray-200 shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  >{isMature ? 'ON' : 'OFF'}</span>
                </Switch>
                </div>
                <small>Your story contains graphic depictions of violence, sexuality, strong language, and/or other mature themes. For more info, please read Wattpad's Content Guidelines: https://www.wattpad.com/guidelines</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </React.Fragment>)
}