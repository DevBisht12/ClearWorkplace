import "./EmployerDashboard.css";
import Chip from "@mui/joy/Chip";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/joy/CardContent";
import Card from "@mui/joy/Card";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import GradeIcon from "@mui/icons-material/Grade";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const EmployerDashboard = () => {
  const [logined, setLogined] = useState(false);
  const [jobs,setJobs]=useState([])
  const { companyInfo } = useSelector((state) => state.CompanyInfo);
  console.log(companyInfo);

  useEffect(() => {
    if (companyInfo) {
      setLogined(true);
    }
  }, [companyInfo]);
  const fetchJobs = async () => {
    try {
      if (logined) {
        const response = await fetch(
          "http://localhost:5000/employer/get-all-jobs-Details",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log(localStorage.getItem("token"))
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const {data} = await response.json();
        console.log(data);
        setJobs(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, [logined]);

  return (
    <div className="EmployerDashboard">
      <div className="employerCoverPhoto">
        <div className="update_cover_photo_sec">
          <AddCircleIcon />
          <span>Update Cover Photo</span>
        </div>
        <img src={companyInfo?companyInfo.coverPicture:"https://i.postimg.cc/j2TJjgpH/Frame-2-1.jpg"} alt="Cover" />
       
        {/* <img src="https://d2q79iu7y748jz.cloudfront.net/s/_headerimage/980x200/a7fe0ef22b0e005dc655d5c98738317a" alt="" /> */}
      </div>
      <div className="profile_info">
        <div className="company_logoInfo">
          <img
            src={companyInfo?companyInfo.profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSSWPyT5fIJ0weLBlc34H9fGaID6qfjrROag5rB8ijZ0lbB4xzLMKgV3kRsPWv94WZzs&usqp=CAU"}
            alt="Company Logo"
          />
          <div className="company_details">
            <h2>{companyInfo ? companyInfo.companyName : "Company Name"}</h2>
            <p>
              {" "}
              <Link to="/employees">
                {companyInfo ? companyInfo.companySize : "11-50 employees"}
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="company_rating_sec">
          {companyInfo && companyInfo.averageRating == "0" ? (
            <Chip
              sx={{ padding: "0.8rem", borderRadius: "8px" }}
              color="Neutral"
              size="lg"
            >
              <Rating
                size="small"
                name="read-only"
                value={companyInfo.averageRating}
                readOnly
              />
            </Chip>
          ) : (
            <Chip
              sx={{ padding: "0.8rem", borderRadius: "8px" }}
              color="success"
              size="lg"
            >
              {companyInfo.averageRating}{" "}
              <Rating
                size="small"
                name="read-only"
                value={companyInfo.averageRating}
                readOnly
              />
            </Chip>
          )}
        </div>
      </div>
      <div className="About_company_sec">
        <h2>About the company</h2>
        <p>
          {companyInfo
            ? companyInfo.aboutCompany
            : "No information about company"}
        </p>
      </div>
      <div className="jobsSec">
        <h2>Jobs</h2>
        {companyInfo.jobs && companyInfo.jobs.length === 0 ? (
          <div className="no_job_sec">
            <img
              src="https://i.postimg.cc/d3yL837f/Group-6.png"
              alt="No Jobs"
            />
            <h1>No Job post yet !</h1>
          </div>
        ) : (
          <div className="all_jobs_sec">
            {companyInfo.jobs &&
              jobs.map((job, index) => (
                <EmployerJobCard key={index} 
                location={job.Location}
                job_title={job.jobTitle}
                job_description={job.jobDescription}
                />
              ))}
          </div>
        )}
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="All_Reviews_sec">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

const ReviewCard = () => {
  return (
    <div className="reviewCard">
      <div className="user_info">
        <Avatar sx={{ marginRight: "1rem" }} size="md" />
        <div className="user_name">
          <h3>John Doe</h3>
          <Chip sx={{ padding: "0.4rem" }} size="sm">
            <strong>4.0</strong>
            <GradeIcon sx={{ color: "#FAAF00" }} />
          </Chip>
        </div>
      </div>
      <div className="message_sec">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          libero non lacinia aliquet, libero nisl dignissim nunc, ac dign issim
          nunc, ac dignissim nunc, ac dignissim nunc, ac dignissim nunc, ac
          dignissim nunc, ac dignissim n
        </p>
      </div>
    </div>
  );
};

const EmployerJobCard = ({location,job_title,job_description}) => {
  return (
    <Card>
      <CardContent>
        <Typography level="body-xs">{location}</Typography>
        <Typography level="title-lg" sx={{width:"12rem",overflow:'hidden',whiteSpace:"nowarp",textOverflow:'ellipsis'}}  >{job_title}</Typography>
      </CardContent>
      <Typography level="body-sm" sx={{ maxWidth: "24ch", wordWrap:'break-word' }}>{job_description}
      </Typography>
      <div className="button_sec">
        <Button sx={{ padding: "0.5rem 1.8rem" }} variant="outlined">
          View
        </Button>
        <Button sx={{ padding: "0.5rem 1.8rem" }}>Delete</Button>
      </div>
    </Card>
  );
};

export default EmployerDashboard;
