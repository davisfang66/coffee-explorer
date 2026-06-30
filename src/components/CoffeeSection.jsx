import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import CoffeeCard from './CoffeeCard'

function CoffeeSection({ coffees, filters }) {

  const [data, setData] = useState([])

  // 🍪 如果你已经在 Home 里传 coffees，就直接用
  useEffect(() => {
    if (coffees?.length) {
      setData(coffees)
    }
  }, [coffees])

  // 🍪 多条件筛选（重点：风味用 includes）
  const filtered = data.filter((coffee) => {

    if (!coffee) return false

    const matchCountry =
      filters.country === 'all' ||
      coffee['Country/国家'] === filters.country

    const matchProcess =
      filters.process === 'all' ||
      coffee['Process/处理法'] === filters.process

    const matchBrand =
      filters.brand === 'all' ||
      coffee['Brand/品牌'] === filters.brand

    // 🍪 ⭐ 风味：模糊匹配（核心）
    const matchFlavor =
      filters.flavor === 'all' ||
      coffee['Flavor CN/中文风味']?.includes(filters.flavor)

    return matchCountry && matchProcess && matchBrand && matchFlavor
  })

  return (
    <section className="coffee-section">

      <div className="section-heading">
        <div>
          <p className="section-kicker">Beans</p>
          <h2>喝啥</h2>
        </div>
      </div>

      <div className="coffee-grid">
        {filtered.map((coffee, index) => (
          <CoffeeCard
            key={index}
            brand={coffee['Brand/品牌']}
            name={coffee['Name EN/英文名称']}
            country={coffee['Country/国家']}
            process={coffee['Process/处理法']}
            flavor={coffee['Flavor CN/中文风味']}
            price={`${coffee['Price GBP/英镑']} / ${coffee['Weight/克数']}`}
          />
        ))}
      </div>

    </section>
  )
}

export default CoffeeSection