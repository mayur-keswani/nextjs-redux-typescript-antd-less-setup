import React from 'react'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import Store from "../store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
require("../styles/globals.less");

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    //Apollo-Provider goes here
    <Provider store={Store}>

       {/* Layout goes here */}
       <Component {...pageProps} />
    </Provider>
   
  )
}

export default MyApp
