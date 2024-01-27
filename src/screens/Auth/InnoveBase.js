import React, { useState } from "react";

function InnoveBase() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English
  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", { username, password });
  };
  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log("Forgot Password clicked");
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="authpage">
      <div className="login-container">
        <div className="logo-container">
          <img src="/logo.svg" alt="Logo" className="logo" />
        </div>
        <h2>InnoveBase Login</h2>
        <form className="form-auth">
          <label className="form-label">
            Username:
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="form-label">
            Password:
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="language-dropdown">
            <label className="form-label">Language:</label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          <div className="form-row">
            <button type="button" onClick={handleLogin} className="form-button">
              Login
            </button>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="forgot-password"
            >
              Forgot Password?
            </button>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default InnoveBase;
