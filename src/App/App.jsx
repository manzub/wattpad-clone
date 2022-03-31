import Router from "./Router";
import React from "react";
import { connect } from 'react-redux';
import Loading from "../components/Loading";

function App({ loaded }) {
  return (<div style={{fontFamily:'Montserrat'}} className='bg-white dark:bg-gray-700 transition-all min-h-screen'>
    {/* add loading and content widget */}
    { loaded ? <Router /> : <Loading/>}
  </div>);
}

export default connect(state => state.app)(App);
