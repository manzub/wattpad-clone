import { lazy } from "react"

const LandingPage = lazy(() => import('../pages/Landing'));
const BrowsePage = lazy(() => import('../pages/Browse'));
const ReadPage = lazy(() => import('../pages/Read'));
const MyStoriesPage = lazy(() => import('../pages/MyStories'));
const NewStoryPage = lazy(() => import('../pages/NewStory'));

const routes = [
  // home
  { path: '/', element: <LandingPage/>, exact: true },
  { path: '/stories', element: <BrowsePage/>, exact: true },
  { path: '/story/:storySlug', element: <ReadPage/>, exact: true },
  { path: '/myworks', element: <MyStoriesPage/>, exact: true },
  { path: '/myworks/new', element: <NewStoryPage/>, exact: true },
];

export default routes;