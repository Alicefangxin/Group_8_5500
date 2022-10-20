import "./login.css"

const Login = () => {
    return(
        <div className="login">
            <div className="lContainer">
                <h4><b>Log in or create an account</b></h4>
                <input type="text" placeholder="username" id="username" className="lInput"/>
                <input type="password" placeholder="password" id="password" className="lInput"/>
                <button className="lButton">Login</button>
            </div>
        </div>
    )
}

export default Login;