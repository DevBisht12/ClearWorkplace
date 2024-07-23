import './JobPostForm.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import DescribePostJobForm from '../JobPostForm/DescribePostJobForm'

const JobPostBasicForm = () => {
    return (
        <div className="job_post_form">
            <div className="job_post_banner_sec">
                <img src="https://i.postimg.cc/wTr5qrHx/Group-5.jpg" alt="" />
            </div>
            <div className="job_post_form_section">
                <form action="">
                    <TextField id="outlined-basic" label="Job Title" variant="outlined" className="job" sx={{paddingBottom:'1.5rem'}}/>
                    <TextField id="outlined-basic" label="Job Location" variant="outlined" sx={{paddingBottom:'1.5rem'}}/>
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{paddingBottom:'1.5rem'}}/>
                    <div className="area-pincode-sec">
                        <TextField id="outlined-basic" label="Area" variant="outlined" sx={{width:'49%' , paddingBottom:'1.5rem'}}  />
                        <TextField id="outlined-basic" label="Pincode" variant="outlined" sx={{width:'49%' , paddingBottom:'1.5rem'}}  />
                    </div>
                    <TextField id="outlined-basic" label="Address" variant="outlined" sx={{paddingBottom:'1.5rem'}}/>
                </form>
                {/* <DescribePostJobForm/> */}
               <Link to="/post-job/describe-job"><Button variant="contained" size="large" >Next</Button></Link> 
            </div>
        </div>
    )
}

export default JobPostBasicForm
