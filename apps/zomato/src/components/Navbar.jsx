const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#payments" className="navbar-link">
              Payments
            </a>
          </li>
          <li className="navbar-item">
            <a href="#restaurants" className="navbar-link">
              Restaurants
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
