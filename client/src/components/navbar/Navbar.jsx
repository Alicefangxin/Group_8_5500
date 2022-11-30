import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (
    {
        registerShown = true,
        loginShown = true,
    }
) => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext);

    const { loading, error, dispatch } = useContext(AuthContext);
    const handleLogout = ()=>{
        dispatch({ type: "LOGOUT" })
        navigate("/")
    }


    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to='/' style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">RacoonBooking</span>
                </Link>
                {user ? (
                    <div className="navItem">
                        <span>{ user.username } </span>
                        <button
                            className="navItems"
                            onClick={() => handleLogout()}
                        >Logout</button>
                    </div>
                ) : (
                    <div className="navItems">
                        {/* Use registerShown and loginShown to determine showing or hiding these buttons on the navigation bar */}
                        { registerShown && <Link to="/register" className="navButton">Register</Link> }
                        { loginShown && <Link to="/login" className="navButton">Login</Link> }
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar