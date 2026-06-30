import { useState, useEffect } from 'react'
import Papa from 'papaparse'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import CoffeeSection from './components/CoffeeSection'

import './App.css'

function App() {

  const [filters, setFilters] = useState({
    country: 'all',
    process: 'all',
    flavor: 'all',
    brand: 'all'
  })

  const [coffees, setCoffees] = useState([])

  // 🍪 关键：重新加载 CSV（你刚刚丢的就是这个）
  useEffect(() => {
    fetch('/coffee.csv')
      .then(res => res.text())
      .then(csvText => {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true
        })
        setCoffees(result.data)
      })
  }, [])

  const resetFilters = () => {
    setFilters({
      brand: 'all',
      country: 'all',
      process: 'all',
      flavor: 'all'
    })
  }

  return (
    <div className="app">

      {/* 🍪 背景曲奇 */}
      <div className="cookie-bg">
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
        <span>🍪</span>
      </div>

      <Navbar />
      <Hero />

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        coffees={coffees}
        resetFilters={resetFilters}
      />

      <CoffeeSection
        filters={filters}
        coffees={coffees}
      />

    </div>
  )
}

export default App