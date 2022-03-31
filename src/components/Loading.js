import { BookmarkIcon } from "@heroicons/react/solid";

const Loading = () => {
  return(<div className="flex justify-center items-center h-screen dark:text-white">
    <div className="spinner-border bg-orange-100 animate-spin inline-block p-5 border-4 rounded-full" role="status">
      <BookmarkIcon className="h-[35px] text-orange-500" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>)
}

export default Loading;