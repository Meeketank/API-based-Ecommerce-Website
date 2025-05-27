import { useState } from "react";
import '../App.css'

const EditDetails = ({username}) => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [warning, setWarning] = useState('');

    const EmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const PhoneValid = () => {
        return(phone.length === 10)
    }

    const PinValid = () => {
        return(pincode.length === 6)
    }

    const AddValid = () => {
        return(address.length < 10)
    }
    
    const SubValid = (page) => {
        page.preventDefault();
        let warnings = [];

        if(!EmailValid()){
            warnings.push(<p>Email not in format</p>)
        }
        if(!PhoneValid()){
            warnings.push(<p>Phone number should be only 10 digits</p>)
        }
        if(!PinValid()){
            warnings.push(<p>Pincode should be just 6 digits</p>)
        }
        if(!AddValid()){
            warnings.push(<p>Enter your full address</p>)
        }
        if(username === "User"){
            warnings.push(<p>User not logged in</p>)
        }

        if(warnings.length === 0){
            alert("Form submited");
            setMessage("");
            setWarning("");
            setEmail("");
            setPhone("");
            setPincode("");
            setAddress("");
        }
        else{
            setWarning(<div style={{backgroundColor: "red", padding: 20, borderRadius: 25}}><h2><u>Warnings</u></h2><p>{warnings}</p></div>)
            setMessage("Invalid Inputs due to errors")
        }
    }

    return(
        <>
        <form className="form">
            <h1 style = {{color: "beige", marginbottom:30}}><u>Address Form</u></h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <label style={{ marginRight: 10 }}>Name:</label>
                <h3 style={{ color: "beige", margin: 0 }}>{username}</h3>
            </div>
            <div>
                <label className="formlabel">Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="inputbox" value={email}/>
            </div>
            <div>
                <label className="formlabel">Phone number: </label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} className="inputbox" value={phone}/>
            </div>
            <div>
                <label className="formlabel">Address: </label>
                <textarea type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="inputbox"/>
            </div>
            <div>
                <label className="formlabel">Pincode: </label>
                <input type="text" onChange={(e) => setPincode(e.target.value)} className="inputbox" value={pincode}/>
            </div>
            <p style={{color: "beige"}}>{warning}</p>
            <button type="submit" onClick={SubValid} className = "submitbuttonform">SUBMIT</button>
            <p style = {{color: "pink"}}>{message}</p>
        </form>
        </>
    )
}

export {EditDetails}