import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Header from './components/Header/Header.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './components/Layout/Layout.jsx';

let routers = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Header /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Portfolio", element: <Portfolio /> },

    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
