import { useNavigate } from "react-router-dom";

const UserDetails = ({ username }) => {
  const navigate = useNavigate();

  const handle_login = () => {
    if (username === "User" || "user") {
      navigate('/login');
    } else {
      alert("User already logged in");
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      <h2>Welcome {username}</h2>
      <button style={{ margin: 30, padding: 5 }} onClick={handle_login} className="submitbuttonform">
        <h3 style={{margin: 10}}>Login</h3>
      </button>
    </div>
  );
};

export { UserDetails };
