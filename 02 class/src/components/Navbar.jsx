

const Navbar = () => {
   const logo = "MZ";
  return (
   
    <>
      <nav className="navbar">
        <div className="logo">{logo}</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
