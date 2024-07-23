import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import Card from "@mui/joy/Card";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import "./card.css";

export function BioCard({ imgSrc }) {
  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={imgSrc} sx={{ "--Avatar-size": "4rem" }} />

        <Typography variant="h5">Josephine Blanton</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography variant="body1" sx={{ maxWidth: "24ch" }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer
          and I love to code.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                />
                <path
                  fill="currentColor"
                  d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12c0 4.664 3.518 8.515 8.062 8.98a11.825 11.825 0 0 0 3.676.58c.804 0 1.586-.065 2.344-.188a11.837 11.837 0 0 0 3.655-.92c.518-.258.992-.587 1.414-.972c-.503.024-1.028.038-1.56.038a9.35 9.35 0 0 1-5.647-1.927a4.679 4.679 0 0 0 1.09-.282a4.66 4.66 0 0 1-2.086-2.557c.34.062.683.093 1.03.093c.503 0 .993-.065 1.468-.187a4.653 4.653 0 0 1-1.154-4.074a13.247 13.247 0 0 0 9.594 4.847a4.627 4.627 0 0 1-.122-1.073a4.652 4.652 0 0 1 8.057-3.18a9.3 9.3 0 0 0 2.945-1.12a4.671 4.671 0 0 1-2.05 2.57a9.3 9.3 0 0 0 2.672-.73a9.433 9.433 0 0 1-2.313 2.398a9.32 9.32 0 0 0 2.125-.574a9.452 9.452 0 0 1-2.328 2.295Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export function MainCard({ imgSrc, title }) {
  return (
    <Card sx={{ width: 350, height: 400, maxWidth: "100%", boxShadow: "lg" }}>
      <CardContent
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Avatar src={imgSrc} sx={{ "--Avatar-size": "4rem" }} />

        <Typography variant="h5">
          {title ? title : "Josephine Blanton"}
        </Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography variant="body1" sx={{ maxWidth: "24ch" }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer
          and I love to code.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                />
                <path
                  fill="currentColor"
                  d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12c0 4.664 3.518 8.515 8.062 8.98a11.825 11.825 0 0 0 3.676.58c.804 0 1.586-.065 2.344-.188a11.837 11.837 0 0 0 3.655-.92c.518-.258.992-.587 1.414-.972c-.503.024-1.028.038-1.56.038a9.35 9.35 0 0 1-5.647-1.927a4.679 4.679 0 0 0 1.09-.282a4.66 4.66 0 0 1-2.086-2.557c.34.062.683.093 1.03.093c.503 0 .993-.065 1.468-.187a4.653 4.653 0 0 1-1.154-4.074a13.247 13.247 0 0 0 9.594 4.847a4.627 4.627 0 0 1-.122-1.073a4.652 4.652 0 0 1 8.057-3.18a9.3 9.3 0 0 0 2.945-1.12a4.671 4.671 0 0 1-2.05 2.57a9.3 9.3 0 0 0 2.672-.73a9.433 9.433 0 0 1-2.313 2.398a9.32 9.32 0 0 0 2.125-.574a9.452 9.452 0 0 1-2.328 2.295Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export function EmployeeListCard({ id, name, location, position, rating }) {
  return (
    <Card
      className="employeeListCard"
      fullwidth
      sx={{
        border: 0,
        borderRadius: 0,
        borderBottom: "1px solid #ccc",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "space-between",
        // margin:'1rem'
      }}
    >
      <div className="user_details">
        <div className="User_Profile_sec">
          <Avatar
            id="starIcon"
            src="https://i.postimg.cc/ncnkQFp2/18775924-6008031.jpg"
            size="lg"
          />
          <Chip
            size="sm"
            variant="soft"
            color="success"
            sx={{
              mt: -1,
              mb: 1,
              border: "3px solid",
              borderColor: "background.surface",
            }}
          >
            {rating}.0
            <StarIcon sx={{ fontSize: "1rem", color: "#FAAF00" }} />
          </Chip>
        </div>
        <div className="Employee_info">
          <h4>{name}</h4>
          <p>{position}</p>
          <span>
            <BusinessIcon sx={{ fontSize: "1rem" }} />
            Company name
          </span>
          <span>
            <LocationOnIcon sx={{ fontSize: "1rem" }} />
            {location}
          </span>
        </div>
      </div>
      <div className="Employee_actions">
        <ViewEmployeeProfileDrawer id={id} />
      </div>
    </Card>
  );
}

export default function ViewEmployeeProfileDrawer({ id }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [employeeData, setEmployeeData] = useState({});
  const [error, setError] = useState(null);
  const [review, setReview] = useState('');

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(inOpen);
  };

  const fetchEmployee = async (id) => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:5000/employer/get-employee-details?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // console.log(localStorage.getItem("token"));
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const employeeData = await response.json();
      // console.log(employeeData.data);
      setEmployeeData(employeeData.data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (open === true) {
      fetchEmployee(id);
    }
  }, [open]);
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response= await fetch(`http://localhost:5000/employer/review-employee?employee_id=${id}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:localStorage.getItem("token")
        },
        body:JSON.stringify({
          rating:value,
          review:review
        })
      })
      if(!response.ok){
        console.log("Failed to add review")
        throw new Error("Failed to add review")
        
      }
      const data= await response.json();
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        View Profile
      </Button>
      <Drawer
        open={open}
        anchor="right"
        // onClose={toggleDrawer(false)}
      >
        <Box role="presentation">
          <div className="employee_profile_info">
            <div className="employee_profile_header_sec">
              <div className="Cover_photo">
                <img
                  src="https://i.postimg.cc/fyxzc2bB/crop-0-0-1170-390-0-about-cover.jpg"
                  alt=""
                />
              </div>
              <div className="profile_photo">
                <img
                  src="https://i.postimg.cc/0NvTTkc5/18775924-6008033.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="employee_profile_info_sec">
              <div className="userName_rating">
                <h3>{employeeData ? employeeData.name : "no name"}</h3>
                <Chip sx={{ margin: "0.3rem" }} color="success" size="lg">
                {employeeData && employeeData.averageRating ? `${employeeData.averageRating}.0` : '0.0'}

                  <StarIcon />
                </Chip>
              </div>
              <p>{employeeData ? employeeData.bio : "No bio"}</p>
              <p>
                <BusinessIcon /> Company name
              </p>
              <p>
                <LocationOnIcon />{" "}
                {employeeData ? employeeData.location : "India"}
              </p>
              {employeeData.skills && employeeData.skills.length > 0 && (
                <div className="Chip_Tag_sec">
                  {employeeData.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      sx={{ margin: "0.3rem" }}
                      color="success"
                      size="md"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              )}
            </div>

            {/* <div className="Review_Rating_sec">
              <div className="rating_sec">
                <h4>Rating</h4>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <div className="review_sec">
                <h4>Review</h4>
                <form action="">
                  <TextField
                    id="outlined-multiline-static"
                    label="Add Review"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      marginTop: "0.5rem",
                    }}
                  />
                  <Button fullWidth sx={{ margin: "0.5rem 0" }}>
                    Submit
                  </Button>
                </form>
              </div>
            </div> */}
             <form onSubmit={handleSubmit}>
              <div className="Review_Rating_sec">
                <div className="rating_sec">
                  <h4>Rating</h4>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <div className="review_sec">
                  <h4>Review</h4>
                  <TextField
                    id="outlined-multiline-static"
                    label="Add Review"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ marginTop: "0.5rem" }}
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                  />
                  <Button type="submit" fullWidth sx={{ margin: "0.5rem 0" }}>
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Box>
        <CancelIcon
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "white",
            margin: "1rem",
            cursor: "pointer",
          }}
          onClick={toggleDrawer(false)}
        ></CancelIcon>
      </Drawer>
    </Box>
  );
}
