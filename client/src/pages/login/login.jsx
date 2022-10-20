import "./login.css"
import Navbar from "../../components/navbar/Navbar.jsx";

const Login = () => {
    return(
        <div>
            {/* Hide Navbar Login button in the login page */}
            <Navbar loginShown={false}/>
            <div className="login">
                <div className="lContainer">
                    <h4><b>Log in or create an account</b></h4>
                    <input type="text" placeholder="username" id="username" className="lInput"/>
                    <input type="password" placeholder="password" id="password" className="lInput"/>
                    <button className="lButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;