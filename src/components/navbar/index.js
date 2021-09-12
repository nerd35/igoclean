import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg"

const NavBar = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="logo_section navbar-brand w-25">
          <img src={Logo} alt="logo" style={{ width: '150px', height: '80px', overflow: 'hidden', objectFit: 'contain'}}/>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="py-2 mb-2 navbar-nav me-auto mb-lg-0">
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/about"
              >
                About us
              </NavLink>
            </li>

            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/career"
              >
                Career
              </NavLink>
            </li>
            <li className="px-3 nav-item">
              <NavLink
                className="nav-link"
                activeClassName="navlinkactive"
                exact
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <ul className="py-2 mb-2 navbar-nav ms-auto mb-lg-0">
            <li className="px-3 nav-item">
              <i class="fab fa-facebook-f"></i>
            </li>
            <li className="px-3 nav-item">
              <i class="fab fa-instagram"></i>
            </li>
            <li className="px-3 nav-item ">
              <i class="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
