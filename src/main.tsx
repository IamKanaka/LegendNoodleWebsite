import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar/navbar';
import "./index.css";
import Homepage from './Components/homepage/homepage';
import Devteam from './Components/Team/Team';

const router = createBrowserRouter([{
  path: "",
  element: <Navbar />,
  children: [
    {
      path: "",
      element: <Homepage />
    },
    {
      path: "Team",
      element: <Devteam />
    }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
