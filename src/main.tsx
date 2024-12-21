import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/navbar';
import "./index.css";

const router = createBrowserRouter([{
  path: "",
  element: <Navbar />,
  children: [
    {
      path: "",
      element: <Navbar />
    }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
