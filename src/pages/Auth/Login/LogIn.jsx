import { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setCompanyInfo } from "../../../Redux/Features/EmployerInfo.js";

export const UserLogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //role: 'employer',

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse response once
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        // Use the error message from the server, if available
        alert(data.message || "Failed to login, please try again.");
        return;
      }

      // Store token securely
      localStorage.setItem("token", data.token || data.uid);
      

      alert("Login Successful");
      navigate("/user/dashboard");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>
          <Link to="/">
            <strong>C</strong>lear<strong>W</strong>orkspace
          </Link>
        </h1>
        <p>Empowering both employers and employees to find the best</p>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
        />
        <Button
          variant="contained"
          sx={{ padding: "0.7rem 0rem" }}
          type="submit"
        >
          Log in
        </Button>
        <p>
          Don't have an account? <Link to="/User-signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
