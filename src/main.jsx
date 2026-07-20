import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Landing from './Landing';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
