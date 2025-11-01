import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="position-absolute top-0 start-0 end-0">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="logo text-light fs-4 fw-bold">
          <i className="bi bi-link-45deg fs-3" />
          <span className="">UrlShortener</span>
        </div>

        <nav className="">
          <Link to="/" className='btn text-white fw-bold'>Home</Link>
          <Link to="/history" className='btn text-white fw-bold'>
            History <i className="bi bi-arrow-right" /> 
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header