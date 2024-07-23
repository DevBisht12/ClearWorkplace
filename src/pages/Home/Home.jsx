import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";
import { BioCard, MainCard } from "../../components/Card/Card";
import Chip from "@mui/joy/Chip";
import ChipBag from "../../components/Chip/Chip";
import Rating from "@mui/material/Rating";
import Marquee from "react-fast-marquee";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HomeJobCard from "../../components/HomeJobCard/HomeJobCard";
import { useSelector } from "react-redux";
import "./home.css";

gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  const container = useRef(null);
  const { theme } = useSelector((state) => state.theme);


  

  // Initialize GSAP animations using useGSAP hook
  useGSAP(
    () => {
      // Animation for .second_sec using ScrollTrigger
      const tl1 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".second_sec",
            start: "0% 95%",
            end: "50% 50%",
            scrub: 1.5,
            // markers: true
          },
        })
        .to(".main_card", {
          top: "118%",
          left: "15%",
          ease: "power1.inOut",
        });

      // // Animation for .fith_sec h2 using ScrollTrigger
      // gsap.to('.fith_sec h2', {
      //   xPercent: -150,
      //   scrollTrigger: {
      //     trigger: '.fith_sec',
      //     markers: true,
      //     start: 'top 0%',
      //     end: 'top -1500%',
      //     scrub: 2,
      //     pin: true,
      //     pinSpacing: false,

      //   },
      // });
      // gsap.to('.fith_sec h2', {
      //   xPercent: -120,
      //   scrollTrigger: {
      //     trigger: '.fith_sec',
      //     markers: true,
      //     start: 'top top',
      //     end: '+=120%', // Adjust this value to control when the scrolling ends
      //     scrub: 2,
      //     pin: true,
      //     pinSpacing: false,
      //   },
      // });
    },
    { scope: container }
  );

  

  return (
    // <ThemeProvider theme={MUITheme}>
    <div className="home" ref={container}>
      <div className="home_sec">
        <div className="lines">
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line horizontal" : "dark_lines horizontal"
            }
          ></div>

          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
          <div
            className={
              theme === "light" ? "line vertical" : "dark_lines vertical"
            }
          ></div>
        </div>
        <h1>
          Enhancing HR decisions with <br />
          transparency and insight
        </h1>
        <p>
          Empowering both employers and employees to find the best opportunities
        </p>
        <button
          className={theme === "light" ? "hero_sec_btn" : "hero_dark_btn"}
        >
          Sign up 👉
        </button>

        <div className="hero_card_sec">
          <div className="main_card">
            <MainCard
              imgSrc={"https://i.postimg.cc/nhN8tb0y/18775924-6008033.jpg"}
            />
          </div>
          <div className="small_card">
            <BioCard
              imgSrc={"https://i.postimg.cc/NfJqprTf/18775924-6008031.jpg"}
            />
            <BioCard
              imgSrc={"https://i.postimg.cc/wj1KPTc5/18775924-6008032.jpg"}
            />
          </div>
        </div>
      </div>
      <div className="main_home">
        {/* Second Section */}
        <div className="second_sec">
          <div className="img_sec">
            <ChipBag
              imgSrc={"https://i.postimg.cc/nhN8tb0y/18775924-6008033.jpg"}
            />
          </div>
          <div className="second_info_sec">
            <h2>
              Having the right people in the right teams is essential for
              success.
            </h2>
            <Link style={{ paddingTop: "1rem", color: "black" }}>
              Know more 👉
            </Link>
          </div>
        </div>

        {/* Third Section */}
        <div className="third_sec">
          <div className="third_info_sec">
            <h2>
              Discover the best opportunities and talent with trusted reviews.
            </h2>
            <Link style={{ paddingTop: "1rem", color: "black" }}>
              Know more 👉
            </Link>
          </div>
          <div className="third_img_sec">
            <MainCard
              imgSrc={
                "https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg"
              }
              title={"Google"}
            />
            <div className="chip">
              <Chip
                variant="outlined"
                color="neutral"
                size="lg"
                sx={{
                  padding: "0.5rem",
                }}
              >
                <Avatar
                  src="https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg"
                  sx={{ "--Avatar-size": "3rem", borderRadius: "20px" }}
                />
                <Rating name="read-only" value={4} readOnly />
              </Chip>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="fith_sec">
          <Marquee direction={"right"} speed={100}>
            <h2>
              EMPOWERING BOTH EMPLOYERS AND EMPLOYEES TO FIND THE BEST
              OPPORTUNITIES
            </h2>
          </Marquee>
        </div>

        {/* Fourth Section */}
        <div className="fourth_sec">
          <div className="fourth_info_sec">
            <h2>Top Job Opportunities</h2>
          </div>
          <div className="fourth_img_sec">
            <Marquee gradient={true} gradientWidth={theme==='light'?100: 10} gradientColor={theme==='light'?'white': 'black'} direction={"left"} speed={100}>

              <HomeJobCard
                imgSrc={
                  "https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg"
                }
                cTitle={"Google"}
              />
              <HomeJobCard
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC14VmmKtktb5lN5KkvadEMYkkEwxzJGSPDw&s"
                }
                cTitle={"Swiggy"}
              />
              <HomeJobCard
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s"
                }
                cTitle={"TCS"}
              />
              <HomeJobCard
                imgSrc={
                  "https://www.shutterstock.com/image-vector/amazon-initial-logo-isolated-white-600nw-2272856739.jpg"
                }
                cTitle={"Amazon"}
              />
            </Marquee>
          </div>
        </div>

        {/* Sixth Section (if applicable) */}
        <div className="sixth_sec">
          <div className="get_in_touch">
            <h2>
              {" "}
              Feel free to reach out to us for any queries or collaborations.
            </h2>
            <p>Get in touch 👉</p>
          </div>
          <div className="form_section">
            <form>
              <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                variant="filled"
                color= {theme==='dark'?'secondary':null}
                sx={{ marginBottom: "1rem",
                  backgroundColor: theme === 'light' ? null: 'white',
            
                 }}
              />

              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                variant="filled"
                color= {theme==='dark'?'secondary':null}
                sx={{ marginBottom: "1rem",
                  backgroundColor: theme === 'light' ? null: 'white'
                 }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                variant="filled"
                multiline
                rows={4}
                color= {theme==='dark'?'secondary':null}
                sx={{ width: "100%", marginBottom: "1rem",
                  backgroundColor: theme === 'light' ? null: 'white'
                 }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme==='light'? "black":'#912BBC',
                  color: "white",
                  width: "100%",
                  padding: "1rem",
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </ThemeProvider>
  );
};

export default Home;

