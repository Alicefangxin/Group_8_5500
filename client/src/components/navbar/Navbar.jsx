import "./navbar.css"

const Navbar = (
    {
        registerShown = true,
        loginShown = true,
    }
) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
            {/* Use registerShown and loginShown to determine showing or hiding these buttons on the screen */}
            {registerShown && <button className="navButton">Register</button>}
            {loginShown && <button className="navButton">Login</button>}
        </div>
      </div>
    </div>
  )
}

export default Navbar