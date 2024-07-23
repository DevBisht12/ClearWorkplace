import { useState } from "react";

const Testing=()=>{

    const [file,setFile]=useState(null)
    const handleFileChange=(e)=>{
        console.log(e.target.files);
        setFile(e.target.files[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!file) {
          console.error("No file selected");
          return;
        }
      
        const formData = new FormData();
        formData.append('file', file);
      
        try {
          const response = await fetch("https://clear-workplace-server.vercel.app/user/upload-resume", {
            method: "POST",
            body: formData,
            credentials: 'include',
            headers: {  
              'Accept': 'application/json',
            },
          });
      
          if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            const errorText = await response.text(); // Capture error response
            console.error(errorText);
          } else {
            const result = await response.json();
            console.log(result);
          }
        } catch (error) {
          console.error("Fetch Error:", error);
        }
      }
      
      
    return(
        <div className="testing">
            <form onSubmit={handleSubmit}enctype="multipart/form-data">
                <input type="file" onChange={handleFileChange} />
                <button type="submit" >upload</button>
            </form>
        </div>
    )
}

export default Testing