import { Link, useNavigate } from "react-router-dom";
import '../App.css';


const MenuItems = ({username}) => {
  const navigate = useNavigate();
  const Validation = () => {
    if(username === "User"){
      alert("Login first");
      navigate('/Login');
    }
    else{
      navigate('/EditDetails');
    }
  };


    return(
        <div className="menu-items-container">
      <nav className="menu-links">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/Cart" className="menu-item">Cart</Link>
        <Link to="/About" className="menu-item">About</Link>
        <Link to="/ContactUs" className="menu-item">Contact Us</Link>
        <Link to = "/Faqs" className="menu-item">FAQ's</Link>
      </nav>
      <div className="user-section">
        <Link to="/UserDetails">
          <img src="/user.svg" alt="User Icon" className="user-icon" />
        </Link>
        <a className="username" onClick={Validation}><u>{username}</u></a>
      </div>
    </div>
    )
}

export {MenuItems}