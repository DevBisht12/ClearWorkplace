import "./JobPostForm.css";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Chip from "@mui/joy/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';

const DescribePostJobForm = () => {
    const [value, setValue] = useState('');
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const jobType=["Full-time","Fresher","Part-time", "Internship","Work from home","Permanent","Freelance"];
    const [jobDescriptionData, setJobDescriptionData] = useState({
        jobType: [],
        payRange: { min: '', max: '' },
        jobDescription: "",
        email: ""
    });

    const handleJobType = (jobType) => {
        const updatedJobTypes = selectedJobTypes.includes(jobType)
            ? selectedJobTypes.filter(type => type !== jobType)
            : [...selectedJobTypes, jobType];

        setSelectedJobTypes(updatedJobTypes);
        setJobDescriptionData({...jobDescriptionData, jobType: updatedJobTypes});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'min' || name === 'max') {
            setJobDescriptionData(prevState => ({
                ...prevState,
                payRange: { ...prevState.payRange, [name]: value }
            }));
        } else {
            setJobDescriptionData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setJobDescriptionData({...jobDescriptionData, jobDescription: value});
        console.log(jobDescriptionData);

        setJobDescriptionData({
            jobType: [],
            payRange: { min: '', max: '' },
            jobDescription: "",
            email: ""
            
        })
    };

    return (
        <div className="describe_Post_job_form">
            <div className="describe_Job_banner">
                <img src="https://i.postimg.cc/Jtw1FCD0/Group-5-3.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="job_type_sec">
                    <h2>Job type</h2>
                    <div className="job_type_chips">
                        <Stack direction="row" spacing={2}>
                            {jobType.map((jobType, i) => (
                                <Chip key={i} onClick={() => handleJobType(jobType)} color={selectedJobTypes.includes(jobType) ? 'success' : 'neutral'} size="lg" sx={{ padding: '0.5rem', cursor: 'pointer', margin: 0 }} value={jobType} >
                                    <AddIcon /> {jobType}
                                </Chip>
                            ))}
                        </Stack>
                    </div>
                </div>
                <div className="pay_range_sec">
                    <h2>Pay</h2>
                    <div className="pay_range_sec_input">
                        <TextField
                            id="outlined-basic"
                            label="Minimum"
                            variant="outlined"
                            sx={{ width: '49%' }}
                            type="number"
                            name="min"
                            value={jobDescriptionData.payRange.min}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Maximum"
                            variant="outlined"
                            sx={{ width: '49%' }}
                            type="number"
                            name="max"
                            value={jobDescriptionData.payRange.max}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="job_description_sec">
                    <h2>Job description</h2>
                    {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
                    <TextField
          id="outlined-multiline-static"
          label="Add job description"
          multiline
          rows={6}
          sx={{margin:'1.5rem 0',width:'80%'}}
          name="jobDescription"
          value={jobDescriptionData.jobDescription}
          onChange={handleChange}
        />
                </div>
                <div className="email_sec">
                    <h2>Add email</h2>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ width: '80%', margin: "1.5rem 0" }}
                        name="email"
                        value={jobDescriptionData.email}
                        onChange={handleChange}
                        type="email"
                    />
                </div>
                <Button
                    variant="contained" size="large" sx={{ margin: "0 0 2rem 2rem" }} type="submit"
                >Submit</Button>
            </form>
        </div>
    );
};

export default DescribePostJobForm;
