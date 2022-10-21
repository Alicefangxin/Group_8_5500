import "./register.css";

const Register = () => {

    return (
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
    );
};
export default Register;