import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order placed");
    navigate("/");
  };

  return (
    <div style={{margin: "20px auto", padding: "20px", fontFamily: "Arial, sans-serif", justifyContent: "center" }}>
      <h1>Checkout Page</h1>
      <p>Please review your address and proceed to place the order.</p>

      <p style={{ color: "red", marginTop: "20px" }}>
        ⚠️ The address will be taken from the default form. If you haven't filled it yet, please complete the form before checking out.
        <br />
        For more details, refer to the <strong>FAQs</strong> section.
      </p>

      <Link to="/EditDetails" style={{justifyContent: "center"}}>
        <button style={{ marginTop: "15px", padding: "10px 16px", cursor: "pointer" }}>
          Go to Address Form
        </button>
      </Link>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={handlePlaceOrder}
          className="submitbuttonform">Place order</button>
      </div>
    </div>
  );
};

export { CheckoutPage };
