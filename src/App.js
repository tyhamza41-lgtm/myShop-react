import './App.css';
import { Header, Hero, ProductList } from "./components"
import { useEffect, useMemo, useState } from "react"
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

function App() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!API_URL) {
          throw new Error("REACT_APP_API_URL is missing. Add it to .env and restart the development server.")
        }

        const response = await axios.get(API_URL)
        const cartProducts = response.data?.carts?.[0]?.products

        if (!Array.isArray(cartProducts)) {
          throw new Error("The API response did not include a product list.")
        }

        setProducts(cartProducts)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unable to load products.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()

    if (!searchTerm) {
      return products
    }

    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    )
  }, [products, search])

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Hero />
      <ProductList products={filteredProducts} error={error} loading={loading} />
    </>
  );
}

export default App;
