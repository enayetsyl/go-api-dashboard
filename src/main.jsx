import React from 'react'
import ReactDOM from 'react-dom/client'
import {CookiesProvider} from "react-cookie";
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<CookiesProvider>
   <RouterProvider router={router}/>
    <ToastContainer />
    </CookiesProvider>
  </React.StrictMode>,
)
