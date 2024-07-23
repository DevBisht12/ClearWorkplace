import "./JobPostCard.css";
import Chip from "@mui/joy/Chip";

const JobPostCard = () => {
  return (
    <div className="jobPostCard">
      <h2>Web Developer</h2>
      <h4>OMNINOS TECHNOLOGIES INTERNATIONAL PRIVATE LIMITED</h4>
      <div className="chip_sec">
        <Chip color="success" size="lg">
          Freshers
        </Chip>
        <Chip color="primary" size="lg">
          Full Time
        </Chip>
      </div>
      <p>Mohali, Punjab</p>
      <div className="job_description">
        <ul>
          <li>
            Designing and building responsive and mobile-friendly websites
            optimised for different devices and browsers
          </li>
          <li>
            Writing clean, efficient, and well-documented code using languages
            such as HTML, CSS, XML, and JavaScript
          </li>
          <li>
            JStaying up-to-date with the latest web technologies and industry
            trends to ensure the website is current and secure
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobPostCard;
