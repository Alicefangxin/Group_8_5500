import "./Register.css";

const Register = () => {
    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};
export default Register;