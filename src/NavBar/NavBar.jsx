/**
 * @author Gregory Vincent
 * @date 5/20/22
 * @modified 6/20/22 - GitHub practice
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
} /** Testing GitHub features*/

function testFunction(){
  return 1 + 2
}


export default NavBar;
