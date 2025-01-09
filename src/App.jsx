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
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"

function App() {
 

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans">
          <Route index element={<Vans/>}/>
          <Route path=":id" element={<VanDetail />} />
        </Route>
        <Route path="host" element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path='vans' element={<HostVans/>}/>
          <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo/>}/>
            <Route path="pricing" element={<HostVanPricing/>}/>
            <Route path="photos" element={<HostVanPhotos/>}/>
          
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
