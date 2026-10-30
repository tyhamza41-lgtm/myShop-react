import ProductCard from "./ProductCard"

function ProductList({ products, loading, error }) {
  if (error) {
    return (
      <section className="products-section" id="products" aria-labelledby="products-title">
        <div className="products-section__header">
          <div>
            <p className="products-section__eyebrow">Picked for you</p>
            <h2 id="products-title">Our products</h2>
          </div>
        </div>
        <div className="products-message products-message--error" role="alert">{error}</div>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="products-section" id="products" aria-labelledby="products-title">
        <div className="products-section__header">
          <div>
            <p className="products-section__eyebrow">Picked for you</p>
            <h2 id="products-title">Our products</h2>
          </div>
        </div>
        <div className="products-message" role="status">Loading products...</div>
      </section>
    )
  }

  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <div className="products-section__header">
        <div>
          <p className="products-section__eyebrow">Picked for you</p>
          <h2 id="products-title">Our products</h2>
        </div>
        <p className="products-section__count">
          {products.length} {products.length === 1 ? "item" : "items"}
        </p>
      </div>
      {products.length === 0 ? (
        <div className="products-message" role="status">No products found. Try another search.</div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList
