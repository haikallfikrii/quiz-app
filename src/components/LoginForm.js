// src/components/LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan nama yang diinput, misalnya menyimpan ke state atau mengirim ke server
    console.log("Nama:", name);
  };

  return (
    <div className="login-container glassmorphism">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
