import { useState } from "react";
import '../App.css'

const EditDetails = ({ username }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const validatePhone = (value) => {
    return /^\d{10}$/.test(value); // exactly 10 digits
  }

  const validatePincode = (value) => {
    return /^\d{6}$/.test(value); // exactly 6 digits
  }

  const validateAddress = (value) => {
    return value.length >= 10; // at least 10 characters
  }

  // Handle input changes with validation
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setErrors(prev => ({
      ...prev,
      email: validateEmail(val) ? '' : 'Email not in valid format',
    }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setPhone(val);
    setErrors(prev => ({
      ...prev,
      phone: validatePhone(val) ? '' : 'Phone number must be exactly 10 digits',
    }));
  };

  const handlePincodeChange = (e) => {
    const val = e.target.value;
    setPincode(val);
    setErrors(prev => ({
      ...prev,
      pincode: validatePincode(val) ? '' : 'Pincode must be exactly 6 digits',
    }));
  };

  const handleAddressChange = (e) => {
    const val = e.target.value;
    setAddress(val);
    setErrors(prev => ({
      ...prev,
      address: validateAddress(val) ? '' : 'Enter your full address (at least 10 characters)',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final check on submit
    if (username === "User") {
      setMessage('User not logged in');
      return;
    }

    if (
      validateEmail(email) &&
      validatePhone(phone) &&
      validatePincode(pincode) &&
      validateAddress(address)
    ) {

      const userDetails = {username,email,phone,address,pincode};
      sessionStorage.setItem('userDetails', JSON.stringify(userDetails));

      alert("Form submitted");
      setMessage('');
      setErrors({});
      setEmail('');
      setPhone('');
      setPincode('');
      setAddress('');
    } else {
      setMessage('Please fix the errors before submitting');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h1 style={{ color: "beige", marginBottom: 30 }}><u>Address Form</u></h1>

      <div style={{ marginBottom: 20 }}>
        <label className="formlabel">Name: </label>
        <h3 style={{ color: "beige", display: 'inline' }}>{username}</h3>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="formlabel">Email: </label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          className="inputbox"
        />
        {errors.email && <p style={{ color: 'red', marginTop: 5 }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="formlabel">Phone number: </label>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          className="inputbox"
        />
        {errors.phone && <p style={{ color: 'red', marginTop: 5 }}>{errors.phone}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="formlabel">Address: </label>
        <textarea
          value={address}
          onChange={handleAddressChange}
          className="inputbox"
          rows={3}
        />
        {errors.address && <p style={{ color: 'red', marginTop: 5 }}>{errors.address}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="formlabel">Pincode: </label>
        <input
          type="text"
          value={pincode}
          onChange={handlePincodeChange}
          className="inputbox"
        />
        {errors.pincode && <p style={{ color: 'red', marginTop: 5 }}>{errors.pincode}</p>}
      </div>

      <button
        type="submit"
        className="submitbuttonform">
        SUBMIT
      </button>

      {message && <p style={{ color: "pink", marginTop: 10 }}>{message}</p>}
    </form>
  );
};

export { EditDetails };
