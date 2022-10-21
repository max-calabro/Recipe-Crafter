import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Ingredients from './pages/Ingredients'
//import axios from 'axios'
//import Server from '/'
//import { useEffect, useState } from 'react'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Recipe Crafter</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </div>
  )
}

export default App
