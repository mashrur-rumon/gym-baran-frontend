import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
<nav className="navbar navbar-expand-sm bg-white navbar-white px-lg-5">
  <div className="container-fluid containerPadding">
    <div>
      <span className="logoFirstPart">Gym</span>
      <span className="logoSecondPart">baran</span>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav align-items-center navList">
        <li class="nav-item navItems">
        <NavLink
            to="/"
            className="nav-link"
            activeclassname="active"
          >
            Home
        </NavLink>
        </li>
        <li className="nav-item navItems mr-lg-3">
          <NavLink
            to="/program"
            className="nav-link"
            activeclassname="active"
          >
            Program
          </NavLink>
        </li>
        <li className="nav-item navItems mr-lg-3">
          <NavLink
            to="/blog"
            className="nav-link"
            activeclassname="active"
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item navItems mr-lg-3">
          <NavLink
            to="/aboutUs"
            className="nav-link"
            activeclassname="active"
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-item mr-lg-3">
          <button className="loginButton">Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav;