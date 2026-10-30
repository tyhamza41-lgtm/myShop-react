function Search({ search, setSearch }) {
  return (
    <label className="search-box">
      <svg className="search-box__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        aria-label="Search products"
        placeholder="Search products..."
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
    </label>
  )
}

export default Search
