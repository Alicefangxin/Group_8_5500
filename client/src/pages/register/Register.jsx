import "./register.css";
import Navbar from "../../components/navbar/Navbar.jsx";

const Register = () => {

    return (
        <div>
            <Navbar registerShown = {false}/>
            <div className="login">
                <div className="lContainer">
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        className="lInput"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        className="lInput"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        className="lInput"
                    />
                    <button className="lButton">
                        Register
                    </button>
                </div>
            </div>
        </div>

    );
};
export default Register;