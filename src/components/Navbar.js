import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const toggleNavAnim = '</>';
const Navbar = () => {
  return  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        {/* <img src={logo} alt="logo"/> */}
        <Link to="/">
          <h3 className="logotype">MEYER <span>{toggleNavAnim}</span></h3>
        </Link>
        <button type="button" className="toggle-btn">
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
