import CoffeeCard from "./CoffeeCard"
import {
  getProcessCategories,
  getFlavorCategories
} from "../utils/filterMaps"

function CoffeeSection({ coffees, filters }) {
  const filtered = coffees.filter((coffee) => {
    if (!coffee) return false

    const matchBrand =
      filters.brand === "all" ||
      coffee["Brand/品牌"] === filters.brand

    const matchCountry =
      filters.country === "all" ||
      coffee["Country/国家"] === filters.country

    const processCategories = getProcessCategories(coffee)
    const flavorCategories = getFlavorCategories(coffee)

    const matchProcess =
      filters.process === "all" ||
      processCategories.includes(filters.process)

    const matchFlavor =
      filters.flavor === "all" ||
      flavorCategories.includes(filters.flavor)

    return matchBrand && matchCountry && matchProcess && matchFlavor
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
        {filtered.map((coffee, index) => {
          const priceGBP = coffee["Price GBP/英镑"]
          const weight = coffee["Weight/克数"]

          const formattedPrice =
            priceGBP && String(priceGBP)
              ? `${priceGBP} / ${weight}`
              : `£${priceGBP} / ${weight}`

          return (
            <CoffeeCard
              key={index}
              brand={coffee["Brand/品牌"]}
              name={coffee["Name EN/英文名称"]}
              country={coffee["Country/国家"]}
              process={coffee["Process/处理法"]}
              flavor={coffee["Flavor CN/中文风味"]}
              price={formattedPrice}
              url={coffee["Official URL/官网链接"]}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CoffeeSection