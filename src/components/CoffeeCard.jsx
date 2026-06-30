function CoffeeCard({ brand, name, country, process, flavor, price }) {
    return (
      <div className="coffee-card">
        <div className="coffee-image">🍪</div>
        <div className="coffee-content">
          <p className="coffee-brand">{brand}</p>
          <h3>{name}</h3>
          <p className="coffee-meta">{country} · {process}</p>
          <p className="coffee-flavor">{flavor}</p>
          <p className="coffee-price">{price}</p>
        </div>
      </div>
    )
  }
  
  export default CoffeeCard