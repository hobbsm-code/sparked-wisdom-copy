import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          Sparked Wisdom
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/savedquotes">
                Quotes
              </Link>
            </li>
            {!loginCheck ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Account
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  type="button"
                  onClick={() => {
                    auth.logout();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

