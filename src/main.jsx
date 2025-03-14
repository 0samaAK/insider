import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sale from './components/Sale.jsx'
import Shop from './components/Shop.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'

const root = createRoot(document.getElementById('root'))

let allRoutes =createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/sale',
      element:<Sale/>
    },
    {
      path:'/shop',
      element:<Shop/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/login',
      element:<Login/>
    },
  ]
)

root.render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
  </StrictMode>,
)
