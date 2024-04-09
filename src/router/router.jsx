import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Error from "../pages/Error";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Midjourney from "../pages/Midjourney";
import Overview from "../pages/Overview";
import { redirect } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element:<Overview/>
      },
      {
        path: 'login',
        element:<LoginPage/>
      },
      {
        path: 'signup',
        element:<SignUpPage/>
      },
      {
        path: '/midjourney',
        element:<Midjourney/>
      },
      
      {
        path: '*',
        element:<redirect to="/" />
      }
         ]
  },
  
]);

export default router;