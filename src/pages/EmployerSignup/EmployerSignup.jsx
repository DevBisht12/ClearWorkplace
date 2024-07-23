import React, { useState } from "react";
import "./EmployerSignup.css";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmployerSignupForm = () => {
  const navigate=useNavigate()
  const [formData, SetFormData] = useState({
    companyEmail: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    companySize: "",
    aboutCompany: "",
  });
  const handleFormData = (e) => {
    SetFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.companyEmail ||
      !formData.contactNumber ||
      !formData.companySize ||
      !formData.aboutCompany ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all the fields");
    } else if (formData.password != formData.confirmPassword) {
      alert("Password and Confirm Password should be same");
    }

    try {
      const response = await fetch("http://localhost:5000/employer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({
          companyName: formData.companyName,
          companyEmail: formData.companyEmail,
          companyNumber: formData.contactNumber,
          password: formData.password,
          companySize: formData.companySize,
          aboutCompany: formData.aboutCompany,
        }),
      });
      console.log(response.status)
      if (!response.ok) {
        throw new Error("Something went wrong");
        
      }
      const data = await response.json();
      console.log(data);
      if(response.ok){
        alert("Registration Successful")
        navigate("/Employer-login")
      }
    } catch (error) {
      console.log(error.message);
    }

    console.log(formData);
  };

  return (
    <div className="EmployerSignupForm">
      <div className="EmployerSignUpForm_img_sec"></div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Create an Employer Account</h1>
        <TextField
          id="outlined-basic"
          label="Your company's name"
          variant="outlined"
          name="companyName"
          type="text"
          fullWidth
          margin="normal"
          value={formData.companyName}
          onChange={handleFormData}
        />
        <TextField
          id="outlined-basic"
          label="Your company's email"
          variant="outlined"
          name="companyEmail"
          type="email"
          fullWidth
          margin="normal"
          value={formData.companyEmail}
          onChange={handleFormData}
        />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          name="contactNumber"
          type="number"
          fullWidth
          margin="normal"
          value={formData.contactNumber}
          onChange={handleFormData}
        />
        <TextField
          id="outlined-basic"
          label="Your company's password"
          variant="outlined"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleFormData}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleFormData}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">
            Your company's number of employees
          </InputLabel>
          <Select
            labelId="employee-number-label"
            name="companySize"
            value={formData.companySize}
            onChange={handleFormData}
            label="Your company's number of employees"
          >
            <MenuItem value="11-50">11-50 employees</MenuItem>
            <MenuItem value="51-200">51-200 employees</MenuItem>
            <MenuItem value="201-500">201-500 employees</MenuItem>
            <MenuItem value="501-1000">501-1000 employees</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="About the company"
          multiline
          rows={5}
          fullWidth
          name="aboutCompany"
          value={formData.aboutCompany}
          onChange={handleFormData}
        />
        <Button
          type="submit"
          fullWidth
          sx={{ padding: "1rem", marginTop: "1rem" }}
        >
          Submit
        </Button>
        <p style={{ marginTop: "1rem" }}>
          Back to <Link to="/">Home</Link>
        </p>
      </form>
    </div>
  );
};

export default EmployerSignupForm;
