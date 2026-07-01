import {
  getProcessCategories,
  getFlavorCategories,
  uniqueList
} from "../utils/filterMaps"

function FilterBar({ filters, setFilters, coffees, resetFilters }) {
  const brands = uniqueList(
    coffees.map(coffee => coffee["Brand/品牌"])
  )

  const countries = uniqueList(
    coffees.map(coffee => coffee["Country/国家"])
  )

  const processes = uniqueList(
    coffees.flatMap(coffee => getProcessCategories(coffee))
  )

  const flavors = uniqueList(
    coffees.flatMap(coffee => getFlavorCategories(coffee))
  )

  const handleReset = () => {
    if (resetFilters) {
      resetFilters()
    } else {
      setFilters({
        brand: "all",
        country: "all",
        process: "all",
        flavor: "all"
      })
    }
  }

  return (
    <div className="filter-bar">
      <select
        value={filters.brand}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            brand: e.target.value
          }))
        }
      >
        <option value="all">品牌</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <select
        value={filters.country}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            country: e.target.value
          }))
        }
      >
        <option value="all">国家</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        value={filters.process}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            process: e.target.value
          }))
        }
      >
        <option value="all">处理法</option>
        {processes.map((process, index) => (
          <option key={index} value={process}>
            {process}
          </option>
        ))}
      </select>

      <select
        value={filters.flavor}
        onChange={(e) =>
          setFilters(prev => ({
            ...prev,
            flavor: e.target.value
          }))
        }
      >
        <option value="all">风味</option>
        {flavors.map((flavor, index) => (
          <option key={index} value={flavor}>
            {flavor}
          </option>
        ))}
      </select>

      <button
        className="reset-btn"
        onClick={handleReset}
      >
        Reset / 重置选项
      </button>
    </div>
  )
}

export default FilterBar