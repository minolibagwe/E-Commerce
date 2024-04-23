import React, { useState } from "react";
import "./login.css";

const LoginSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login/signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        <p className="toggle-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignupPage;
