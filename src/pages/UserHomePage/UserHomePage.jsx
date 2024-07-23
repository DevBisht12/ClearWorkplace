import "./profile.css";
import Chip from "@mui/joy/Chip";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import PostAddIcon from "@mui/icons-material/PostAdd";
import JobCard from "../../components/JobCard/JobCard";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";

const UserHomePage = () => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    // setResume(event.target.files[0]);
  };

  return (
    <div className="Profile">
      <div className="myInfo_sec">
        <div className="user_header_sec">
          <div className="cover_img_sec">
            <img
              src="https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg"
              alt=""
            />
          </div>
          <div className="user_info_Card">
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 56, height: 56, border: "3px solid white" }}
            />
            {/* <Chip
              size="sm"
              variant="soft"
              color="success"
              sx={{
                mt: -2,
                mb: 1,
                border: "3px solid",
                borderColor: "background.surface",
              }}
            >
              <strong>4.3</strong>
            </Chip> */}
          </div>
        </div>
        <div className="profile_main">
          <div className="Profile_user_info">
            <h2>Rahul Bisht</h2>

            <p>
              Passionate Frontend Developer Seeking Job: Expertise in HTML, CSS,
              JavaScript, React.js
            </p>
            <div className="tag_sec">
              <Chip size="md">Full stack developer</Chip>
              <Chip size="md">React</Chip>
              <Chip size="md">Node</Chip>
              <Chip size="md">Express</Chip>
            </div>
          </div>

          <div className="user_review">
            <p>
              User review{" "}
              <Chip color="success" size="sm">
                4.3
              </Chip>
            </p>
            <div className="user_info_and_resume">
              <p>Resume</p>
              <UploadResumeModal />
            </div>
          </div>
          <div className="user_exprence_sec">
            <h2>Experience</h2>
            <div className="experience_main">
              <ExperienceCard
                imgSrc={
                  "https://i.pinimg.com/originals/89/0c/25/890c250fe129488a586b1a99e8b68107.png"
                }
                Name={"Infosys"}
                Role={"Frontend Developer"}
                experience={"2 year 2022"}
              />
              <ExperienceCard
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s"
                }
                Name={"TCS"}
                Role={"Backend Developer"}
                experience={"1 year 2024"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="jobs_sec">
        <div className="banner">
          <h1>ClearWorkplace</h1>
          <p>
            Empowering both employers and employees to find the best
            opportunities
          </p>
        </div>
        <h1>Recommended jobs for you</h1>
        <div className="job_sec_main">
          <JobCard
            imgSrc={
              "https://i.pinimg.com/474x/33/35/03/333503ed0afa4f59423261f391c9819e.jpg"
            }
            Jobtitle={"React Developer"}
            jobDescription={""}
          />
          <JobCard
            imgSrc={
              "https://i.pinimg.com/originals/89/0c/25/890c250fe129488a586b1a99e8b68107.png"
            }
            Jobtitle={"Backend Devloper"}
            jobDescription={""}
          />
          <JobCard
            imgSrc={
              "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
            }
            Jobtitle={"DevOps Engineer"}
            jobDescription={""}
          />
          <JobCard
            imgSrc={
              "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
            }
            Jobtitle={"Software Engineer"}
            jobDescription={""}
          />
        </div>
      </div>
    </div>
  );
};

const UploadResumeModal = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true); // Start loading

    try {
      const response = await fetch(
        "https://clear-workplace-server.vercel.app/user/upload-resume",
        {
          method: "POST",
          body: formData,
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("Status Code:", response.status);

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const errorText = await response.text();
        console.error(errorText);
        setSuccessMessage(""); 
      } else {
        const result = await response.json();
        console.log(result);
        console.log(response.status);
        setStatusCode(response.status);
        setSuccessMessage("Success"); 
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSuccessMessage("Upload failed."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        sx={{ padding: "0.3rem", borderColor: "transparent" }}
        onClick={() => setOpen(true)}
      >
        <PostAddIcon />
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 600,
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            Add Resume
          </Typography>
          <div className="resume_sec">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="resume_form">
                <label htmlFor="">📄 Resume</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <Button
                type="submit"
                sx={{
                  margin: "0 1rem",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:
                    successMessage === ""
                      ? "#0b6bcb"
                      : null || successMessage === "File successfully uploaded!"
                      ? "green"
                      : successMessage === "Upload failed."
                      ? "red"
                      : "green",
                }}
              >
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  successMessage || "Upload"
                )}
              </Button>
            </form>
          </div>
        </Sheet>
      </Modal>
    </>
  );
};

export default UserHomePage;
