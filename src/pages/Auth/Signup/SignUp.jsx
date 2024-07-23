import "./SignUp.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

    const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleonChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpForm = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/login')
  };

  return (
    <div className="Signup">
      <form className="Signupform" onSubmit={handleSignUpForm}>
        <h1>
          <Link to="/">
            <strong>C</strong>lear<strong>W</strong>orkspace
          </Link>
        </h1>
        <p>
          Empowering both employers and employees to find the best opportunities
        </p>
        <TextField
         id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleonChange}
          value={formData.name}
          name="name"
          type="text"
          />
        <TextField
         id="outlined-basic"
          label="Email" 
          variant="outlined"
          onChange={handleonChange}
          value={formData.email}
          name="email"
          type="email"
          />
        <TextField
         id="outlined-basic"
          label="Password" 
          variant="outlined"
          onChange={handleonChange}
          name="password"
          value={formData.password}
          type="password"
          />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          onChange={handleonChange}
          name="confirmPassword"
          value={formData.confirmPassword}
          type="password"
        />
        <Button variant="contained" type="submit" sx={{ padding: "0.7rem 0rem" }}>
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to="/User-login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
