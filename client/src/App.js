import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Recipes from './components/Recipes'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Recipe Crafter</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  )
}

export default App
