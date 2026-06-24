import "./UploadBox.css";
import { useEffect, useState } from "react";
import "./SkillList.css";
function UploadBox() {

  const [uploaded, setUploaded] = useState(false);
  const [name, setName] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
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

    setLoading(true);

    setTimeout(() => {

      setUploaded(true);
      setLoading(false);

    }, 2000);

  }

  else{
    alert("Select a resume first!");
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
disabled={loading}
>

{
loading
?
"Uploading..."
:
"Upload Resume"
}

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

 <div className="skills-container">

{
skills.map((skill)=>(
<div className="skill-card" key={skill}>
{skill}
</div>
))
}

</div>

  </div>
)}

  </div>
);
}

export default UploadBox;