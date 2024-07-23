import "./JobsSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import FluorescentIcon from "@mui/icons-material/Fluorescent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WorkIcon from "@mui/icons-material/Work";
import JobPostCard from "../../components/JobPostCard/JobPostCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobsPage = () => {
  return (
    <div className="Job_Page">
      <div className="search_box">
        <div className="search-bar">
          <div className="search-bar__input">
            <SearchIcon />
            <input type="text" placeholder="Job title, keywords, or company" />
          </div>
          <div className="search-bar__input">
            <LocationOnIcon />
            <input type="text" placeholder="Delhi, Delhi" />
          </div>
          <Button variant="solid" color="primary" size="lg">
            Find
          </Button>
        </div>
      </div>
      <div className="job_feed_sec">
        <h1>Job Feed</h1>
        <hr />
        <div className="Job_feed_main">
          <div className="job_Post_sec">
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
          </div>
          <div className="Job_details_section">
            <div className="job_details_header">
              <h2>Web Developer</h2>
              <h4>OMNINOS TECHNOLOGIES INTERNATIONAL PRIVATE LIMITED</h4>
              <p>Mohali, Punjab</p>
              <p>₹10,000 - ₹15,000 a month</p>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                sx={{ width: "fit-content" }}
              >
                Apply
              </Button>
            </div>
            <div className="job_details_main">
              <div className="Profile_insights_sec">
                <h3>Profile insights</h3>
                <div className="skill_sec">
                  <FluorescentIcon />
                  <div className="skill_chip_main">
                    <h4>Skills</h4>
                    <div className="skill_chip_sec">
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        HTML
                      </Chip>
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        CSS
                      </Chip>
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        JavaScript
                      </Chip>
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        React
                      </Chip>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Job_details_sec">
                <h3>Job details</h3>
                <div className="pay_sec">
                  <CurrencyRupeeIcon />
                  <div className="pay_main_sec">
                    <h4>Pay</h4>
                    <div className="pay_sec_info">
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        ₹10,000 - ₹20,000 a month
                      </Chip>
                    </div>
                  </div>
                </div>
                <div className="Job_Type_Sec">
                  <WorkIcon />
                  <div className="job_type_main">
                    <h4>Job type</h4>
                    <div className="job_type_info">
                      <Chip
                        color="success"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        Full-time
                      </Chip>
                      <Chip
                        color="neutral"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        Internship
                      </Chip>
                      <Chip
                        color="success"
                        size="md"
                        variant="soft"
                        sx={{ borderRadius: "5px" }}
                      >
                        Fresher
                      </Chip>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Location_sec">
                <h4>Location</h4>
                <div className="location_main_sec">
                  <LocationOnIcon />
                  <p>Mohali, Punjab</p>
                </div>
              </div>
              <div className="Full_job_description_sec">
                <h4>Full job description</h4>
                <p>
                  <strong>Job Category:</strong> Web Development Internship
                </p>
                <p>
                  <strong>Job Type:</strong> Freshers / Full time / Internship
                </p>
                <p>
                  <strong>Job Location:</strong> Mohali, Punjab (Only Walk-In
                  Interview)
                </p>
                <p>
                    <strong>Job Description:</strong>
                  Our Omninos Technologies provide opportunities in Web
                  Development Internship to join our dynamic team.
                </p>
                <p><strong>The most typical duties and responsibilities of the web developer include:</strong></p>
                <ul>
                  <li>
                    Designing and building responsive and mobile-friendly
                    websites optimised for different devices and browsers.
                  </li>
                  <li>
                    Writing clean, efficient, and well-documented code using
                    languages such as HTML, CSS, XML, and JavaScript.
                  </li>
                  <li>
                    Implementing and maintaining website content management
                    systems.
                  </li>
                  <li>
                    Staying up-to-date with the latest web technologies and
                    industry trends to ensure the website is current and secure.
                  </li>
                  <li>
                    Creating and managing databases for website functionality.
                  </li>
                  <li>Maintaining and updating existing websites.</li>
                </ul>
                <p>
                  <strong>More Information Call On:</strong> 9988063636
                </p>
                <p>Job Types: Full-time, Fresher, Internship</p>

                <h2></h2>
                <p>Pay: ₹10,000.00 - ₹20,000.00 per month</p>

                <h5>Benefits</h5>
                <ul>
                  <li>Paid sick time</li>
                  <li>Paid time off</li>
                </ul>

                <h5>Schedule</h5>
                <p>
                  Day shift
                  <br />
                  Monday to Friday
                </p>

                <p>Work Location: In person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
