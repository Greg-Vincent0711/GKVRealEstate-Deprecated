/**
 * @author Gregory Vincent
 * @date 5/20/22
 * Navigation component for the homepage, if a user is not a tenant.
 */

import { Link } from "react-router-dom";
import "./NavBar.css";
// import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="Home">
        <em>GKVRealEstate</em>
      </Link>
      <ul>
        <li>
          <Link to="/ContactPage">Contact Us</Link>
        </li>
        <li>
          <Link to="/Listings">Listings</Link>
        </li>
        <li>
          <Link to="/AboutPage">About Us</Link>
        </li>
      </ul>
    </nav>
  );
} /** */

export default NavBar;
/**
 * <li>
          <Link to="/AboutPage">About Us</Link>
        </li>
 */
