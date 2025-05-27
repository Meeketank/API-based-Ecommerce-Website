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
        return(address.length <10)
    }
    
    const SubValid = (page) => {
        page.preventDefault();
        let warnings = [];

        if(!EmailValid()){
            warnings.push("Email not in format")
        }
        if(!PhoneValid()){
            warnings.push("Phone number should be only 10 digits \n")
        }
        if(!PinValid()){
            warnings.push("Pincode should be just 6 digits \n")
        }
        if(!AddValid()){
            warning.push("Enter your full address")
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
            setWarning(warnings + "\n")
            setMessage("Invalid Inputs due to errors")
        }
    }

    return(
        <>
        <form className="form">
            <h1 style = {{color: "beige", marginbottom:30}}><u>Address Form</u></h1>
            <label className="formlabel">Name: </label>
            <h3 className="inputbox" style = {{color:"beige"}}>{username}</h3>
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
            <p style={{color: "pink"}}>{warning}</p>
            <button type="submit" onClick={SubValid} className = "submitbuttonform">SUBMIT</button>
            <p style = {{color: "pink"}}>{message}</p>
        </form>
        </>
    )
}

export {EditDetails}