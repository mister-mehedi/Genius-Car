import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import About from '../Pages/Single/About';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      }
    ]
  },
  {
    path: "/about",
    element: <Layout></Layout>,
    children:[
      {
        path: "/about",
        element: <About></About>,
      }
    ]

  },
]);