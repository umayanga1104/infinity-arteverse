import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import NotFound from './NotFound';
import Manifestations from './pages/Manifestations';



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/projects",
        element: <Manifestations/>
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
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
