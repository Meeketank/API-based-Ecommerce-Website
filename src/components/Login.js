import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usercred, setUsercred] = useState('');
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();
    const returnhome = () => {
        navigate("/")
    }

    const verify = (page) => {
        page.preventDefault();
        if(usercred === "M1"){
            setMessage("Login Success")
            setUsername("Meeket")
        }
        else{
            setUsername("User")
            setMessage("Login Failure")
        }
    }

    return(
        <section>
            <h1>
                Login Page
            </h1>
            <br/>
            <form>
                <div>
                    <label>User credentials: </label>
                    <input className="usercred" onChange={(e) => setUsercred(e.target.value)}/>
                </div>
                <div>
                    <button style={{margin: 20}} onClick={verify} type="submit">SUBMIT</button>
                </div>
            </form>
            <h3>{message} {username}</h3>
            <a onClick={returnhome} className="returntext" style={{color: "blue", marginBottom: 50}} align = "center"><u><b>Return home</b></u></a>
        </section>
    )
}

export {Login}