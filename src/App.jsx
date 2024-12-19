import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import "./server.jsx"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import HostLayout from "./components/HostLayout"

function App() {
 

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/host" element={<HostLayout/>}>
          <Route path="/host" element={<Dashboard/>}/>
          <Route path="/host/reviews" element={<Reviews/>}/>
          <Route path="/host/income" element={<Income/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
