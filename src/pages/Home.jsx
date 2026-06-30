import { useState, useEffect } from 'react'
import Papa from 'papaparse'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FilterBar from '../components/FilterBar'
import CoffeeSection from '../components/CoffeeSection'

function Home() {

  const [filters, setFilters] = useState({
    brand: 'all',
    country: 'all',
    process: 'all',
    flavor: 'all'
  })

  const [coffees, setCoffees] = useState([])

  // 🍪 CSV加载
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

  // 🍪 reset（关键）
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

export default Home