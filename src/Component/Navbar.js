import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ isAuthorized, setIsAuthorized }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const correctUsername = process.env.REACT_APP_LOGIN_USERNAME;
  const correctPassword = process.env.REACT_APP_LOGIN_PASSWORD;

  const toUpload = () => {
    if (isAuthorized) {
      navigate("/upload");
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setIsAuthorized(true);
      sessionStorage.setItem("isAuthorized", "true");
      setShowLogin(false);
      navigate("/upload");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem("isAuthorized");
    navigate("/");
  };

  return (
    <div>
      <div className="outer">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="upbtn" onClick={toUpload}>
            Upload
          </button>
          {isAuthorized && (
            <button title="Logout" className="lgbtn" onClick={handleLogout}>
              <FiLogOut />
            </button>
          )}
        </div>
      </div>

      {showLogin && (
        <div className="login-modal">
          <form className="login-box" onSubmit={handleLogin}>
            <h3>Login Required</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <button type="button" onClick={() => setShowLogin(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Navbar;
