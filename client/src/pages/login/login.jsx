import "./login.css"
import Navbar from "../../components/navbar/Navbar.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState(
        {
            username: undefined,
            password: undefined,
        }
    );

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setCredentials((prev) => ({
            ...prev,
            [event.target.id]:event.target.value
        }))
    }

    const handleClick = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try{
            const res = await axios.post('/auth/login', credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

    return(
        <div>
            {/* Hide Navbar Login button in the login page */}
            <Navbar loginShown={false}/>
            <div className="login">
                <div className="lContainer">
                    <h4><b>Log in or create an account</b></h4>
                    <input type="text"
                           placeholder="username"
                           id="username"
                           className="lInput"
                           onChange={handleChange}/>
                    <input type="password"
                           placeholder="password"
                           id="password"
                           className="lInput"
                           onChange={handleChange}/>
                    <button className="lButton" disabled={loading} onClick={handleClick}>Login</button>
                    {error && <span>{error.message}</span>}
                </div>
            </div>
        </div>
    )
}

export default Login;