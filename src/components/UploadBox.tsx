import "./UploadBox.css";
import { useEffect, useState } from "react";

function UploadBox() {

  const [uploaded, setUploaded] = useState(false);
  const [name, setName] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  
  const skills = [
  "React",
  "Node.js",
  "Python",
  "MongoDB"
];
useEffect(() => {
    console.log("UploadBox component loaded!");
}, []);

useEffect(() => {
    console.log("Name changed:", name);
}, [name]);

  function handleClick() {
    if(resume){
        setUploaded(true);
    }
    else{
      alert("Select a resume first!")
    }
  
  }

 return (
  <div className="upload-box">

    <p>Upload your resume to get career insights</p>
    <input
  className="name-input"
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<br></br>
<br></br>
<input
type="file"
accept=".pdf"
onChange={(e)=>
setResume(e.target.files?.[0] || null)
}
/>
{
resume && (
<p>
Selected File: {resume.name}
</p>
)
}
<br /><br />
    <button
      className="upload-btn"
      onClick={handleClick}
    >
      Upload Resume
    </button>

  {uploaded && (
  <div className="success">

    <p>Welcome {name}! 🚀</p>

    <p>
      Selected File:
      <br />
      {resume?.name}
    </p>

    <h3>Skills Found</h3>

    {
      skills.map((skill) => (
        <p key={skill}>
          ✔ {skill}
        </p>
      ))
    }

  </div>
)}

  </div>
);
}

export default UploadBox;