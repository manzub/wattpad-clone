import { lazy } from "react"

const LandingPage = lazy(() => import('../pages/Landing'));

const routes = [
  // home
  { path: '/', element: <LandingPage/>, exact: true },
];

export default routes;