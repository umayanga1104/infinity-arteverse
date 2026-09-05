import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        index: true
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/*", 
        element: <NotFound/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
