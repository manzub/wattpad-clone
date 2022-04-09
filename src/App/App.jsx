import Router from "./Router";
import React from "react";
import { connect, useDispatch } from 'react-redux';
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import axios from "axios";
import { ServerlessHttpUrl } from "../utils/backendApi";

function App({ loaded }) {
  const dispatch = useDispatch();

  useQuery('init-netlify-lambda', () => {
    return axios.get(`${ServerlessHttpUrl}/init`)
  }, { enabled: !loaded, onSuccess: function(data) {
    dispatch({ type: 'LOADED', payload:{ init: true } })
  } })

  return (<div style={{fontFamily:'Montserrat'}} className='bg-gray-50 dark:text-white dark:bg-gray-700 transition-all min-h-screen'>
    {/* add loading and content widget */}
    { loaded ? <Router /> : <Loading/>}
  </div>);
}

export default connect(state => state.app)(App);
