import { useState } from "react";
import "./signinandsignup.css";

export default function LoginAndSignUP() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="modal-overlay">
      <div className="form-container">
        <div className="header">
          <h2>Login / Sign Up</h2>
          <p>Join Ma3k ResQ</p>
          <span
            className="close-button"
            onClick={() => console.log("Close Clicked")}
          >
            &times;
          </span>
        </div>

        <div className="toggle-container">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label>Full Name *</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <label>Email *</label>
            <input
              name="email"
              type="email"
              placeholder="example@email.com"
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>Phone Number *</label>
              <input
                name="phone"
                type="text"
                placeholder="05XXXXXXXX"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className={isLogin ? "" : "input-row"}>
            <div className="input-group">
              <label>Password *</label>
              <input
                name="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
                required
              />
            </div>

            {!isLogin && (
              <div className="input-group">
                <label>Confirm Password *</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="********"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};