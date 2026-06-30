function CoffeeCard({ brand, name, country, process, flavor, price }) {
  return (
    <div className="coffee-card">
      <div className="coffee-main">
        <p className="coffee-brand">{brand}</p>
        <h3 className="coffee-name">{name}</h3>
      </div>

      <div className="coffee-info-box">
        <p className="coffee-meta">{country} · {process}</p>
        <p className="coffee-flavor">{flavor}</p>
        <p className="coffee-price">{price}</p>
      </div>
    </div>
  )
}

export default CoffeeCard