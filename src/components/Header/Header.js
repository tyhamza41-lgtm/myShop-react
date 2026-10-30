import Search from './Search'

function Header({ search, setSearch }) {
  return (
    <header className="shop-header">
      <div className="shop-header__inner">
        <a className="shop-brand" href="/" aria-label="shopEco home">
          <span className="shop-brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19.5 4.5c-7.3.2-12 2.7-12 7.4a4.1 4.1 0 0 0 4.1 4.1c4.8 0 7.7-4.9 7.9-11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M5 20c1.8-4.5 5.2-7.7 10.1-9.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
          <span className="shop-brand__name">shop<span>Eco</span></span>
        </a>
        <Search search={search} setSearch={setSearch} />
      </div>
    </header>
  )
}

export default Header
