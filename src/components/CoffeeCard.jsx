function CoffeeCard({ brand, name, country, process, flavor, price, url }) {
  const CardTag = url ? "a" : "div"

  return (
    <CardTag
      className="coffee-card"
      href={url || undefined}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
    >
      <div className="coffee-main">
        <p className="coffee-brand">{brand}</p>
        <h3 className="coffee-name">{name}</h3>
      </div>

      <div className="coffee-info-box">
        <p className="coffee-meta">{country} · {process}</p>
        <p className="coffee-flavor">{flavor}</p>
        <p className="coffee-price">{price}</p>
      </div>
    </CardTag>
  )
}

export default CoffeeCard