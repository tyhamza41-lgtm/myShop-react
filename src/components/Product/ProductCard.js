

function ProductCard({ title, price, quantity, thumbnail }) {
  return (
    <article className="card">
      <div className="card__image-wrap">
        <img src={thumbnail} alt={title} loading="lazy" />
      </div>
      <div className="card__details">
        <h3 className="card__title">{title}</h3>
        <div className="card__meta">
          <span className="card__price">${price.toFixed(2)}</span>
          <span className="card__quantity">{quantity} in stock</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
