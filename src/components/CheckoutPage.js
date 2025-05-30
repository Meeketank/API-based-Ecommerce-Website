import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem("userDetails");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.username && parsedData.username !== "User") {
        setUserDetails(parsedData);
      }
    }
  }, []);

  const handlePlaceOrder = () => {
    alert("Order placed");
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#121212",
        borderRadius: "10px",
        color: "#fff",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Checkout Page</h1>
      <p style={{ marginBottom: "20px" }}>
        Please review your address and proceed to place the order.
      </p>
      <p style={{ color: "red", marginBottom: "20px" }}>
        ⚠️ The address will be taken from the default form. If you haven't
        filled it yet, please complete the form before checking out.
        <br />
        For more details, refer to the <strong>FAQs</strong> section.
      </p>
      {userDetails ? (
        <div
          style={{
            backgroundColor: "#222",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          <p>
            <strong>Name:</strong> {userDetails.username}
          </p>
          <p>
            <strong>Email:</strong> {userDetails.email}
          </p>
          <p>
            <strong>Phone:</strong> {userDetails.phone}
          </p>
          <p>
            <strong>Address:</strong> {userDetails.address}
          </p>
          <p>
            <strong>Pincode:</strong> {userDetails.pincode}
          </p>
        </div>
      ) : (
        <p style={{ color: "red", marginBottom: "30px" }}>
          No user details found. Please fill the form first.
        </p>
      )}
      
      <Link to="/EditDetails" style={{ textDecoration: "none", color: "white"}}>
        <button
          style={{
            paddingBottom: "10px",
            cursor: "pointer",
            marginBottom: "20px",
            width: "100%",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
          }}
        >
          <p>Go to Address Form </p>
        </button>
          </Link>
     
      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "10px 16px",
          width: "100%",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "skyblue",
          color: "black",
          fontSize: "16px",
        }}
      ><p>Place order</p></button>
    </div>
  );
};

export { CheckoutPage };
