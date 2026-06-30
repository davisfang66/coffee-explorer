function FilterBar({ filters, setFilters, coffees, resetFilters }) {

  const brands = [...new Set(coffees.map(c => c['Brand/品牌']).filter(Boolean))]
  const countries = [...new Set(coffees.map(c => c['Country/国家']).filter(Boolean))]
  const processes = [...new Set(coffees.map(c => c['Process/处理法']).filter(Boolean))]
  const flavors = [...new Set(
    coffees.flatMap(c =>
      (c['Flavor CN/中文风味'] || '')
        .split('、')
        .map(f => f.trim())
    ).filter(Boolean)
  )]

  return (
    <div className="filter-bar">

      {/* brand */}
      <select
        value={filters.brand}
        onChange={(e) =>
          setFilters(prev => ({ ...prev, brand: e.target.value }))
        }
      >
        <option value="all">品牌</option>
        {brands.map((b, i) => (
          <option key={i} value={b}>{b}</option>
        ))}
      </select>

      {/* country */}
      <select
        value={filters.country}
        onChange={(e) =>
          setFilters(prev => ({ ...prev, country: e.target.value }))
        }
      >
        <option value="all">国家</option>
        {countries.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>

      {/* process */}
      <select
        value={filters.process}
        onChange={(e) =>
          setFilters(prev => ({ ...prev, process: e.target.value }))
        }
      >
        <option value="all">处理法</option>
        {processes.map((p, i) => (
          <option key={i} value={p}>{p}</option>
        ))}
      </select>

      {/* flavor */}
      <select
        value={filters.flavor}
        onChange={(e) =>
          setFilters(prev => ({ ...prev, flavor: e.target.value }))
        }
      >
        <option value="all">风味</option>
        {flavors.map((f, i) => (
          <option key={i} value={f}>{f}</option>
        ))}
      </select>

      {/* reset button */}
      <button
        className="reset-btn"
        onClick={resetFilters}
      >
        Reset / 重置选项
      </button>

    </div>
  )
}

export default FilterBar
