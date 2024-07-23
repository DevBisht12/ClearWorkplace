import Avatar from "@mui/material/Avatar";
import './ExperienceCard.css'


const ExperienceCard=({imgSrc , Role ,Name,experience,location})=>{
    return(
        <div className="experience_card" >
            <div className="company_info">
              <Avatar
                variant="rounded"
                src={imgSrc}
              />
            </div>
            <div className="Experience_info">
              <h4>{Role}</h4>
              <p>{Name}</p>
              <p>{experience}</p>
              <p>Mysuru, Karnataka, India</p>
            </div>
        </div>
    )
}

export default ExperienceCard