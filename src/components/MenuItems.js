import { Link } from "react-router-dom";
import '../App.css';
import { Login } from "./Login";

const MenuItems = ({username}) => {
    return(
        <div className="menu-items-container">
      <nav className="menu-links">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/Cart" className="menu-item">Cart</Link>
        <Link to="/About" className="menu-item">About</Link>
        <Link to="/ContactUs" className="menu-item">Contact Us</Link>
      </nav>
      <div className="user-section">
        <Link to="/UserDetails">
          <img src="/logo192.png" alt="User Icon" className="user-icon" />
        </Link>
        <p className="username">{username}</p>
      </div>
    </div>
    )
}

export {MenuItems}