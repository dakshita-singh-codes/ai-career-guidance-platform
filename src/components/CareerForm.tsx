import { useState } from "react";
import "./CareerForm.css";

function CareerForm(){

const [name, setName] = useState("");

const [college, setCollege] = useState("");

const [branch, setBranch] = useState("");

const [cgpa, setCgpa] = useState("");

const [domain, setDomain] = useState("");

const [about, setAbout] = useState("");

const [profile, setProfile] = useState<{
    name: string;
    college: string;
    branch: string;
    cgpa: string;
    domain: string;
    about: string;
} | null>(null);

function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
  name === "" ||
  college === "" ||
  branch === "" ||
  cgpa === "" ||
  domain === "" ||
  about === ""
) {
  alert("Please fill all the fields!");
  return;
}
setProfile({
    name,
    college,
    branch,
    cgpa,
    domain,
    about
});
}

return(
    <>
    <form className="career-form" onSubmit={handleSubmit}>
        <h1>Career Details</h1>
    <label htmlFor="name">Name</label>
    <input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<label htmlFor="college">College</label>
<input
type="text"
placeholder="College"
value={college}
onChange={(e)=>setCollege(e.target.value)}
/>

<label htmlFor="branch">Branch</label>
<select
value={branch}
onChange={(e)=>setBranch(e.target.value)}
>

<option value="">Choose Branch</option>

<option>AIML</option>

<option>CSE</option>

<option>CS</option>

<option>IT</option>

</select>

<label htmlFor="cgpa">CGPA</label>
<input
type="number"
placeholder="CGPA"

value={cgpa}

onChange={(e)=>setCgpa(e.target.value)}
/>

<label htmlFor="domain">Domain</label>
<select
value={domain}
onChange={(e)=>setDomain(e.target.value)}
>

<option value="">Choose Domain</option>

<option>AI/ML</option>

<option>Web development</option>

<option>Cyber Security</option>

<option>Data Science</option>

<option>Cloud Computing</option>

</select>

<label htmlFor="about">About</label>
<textarea

placeholder="Tell us about yourself"

value={about}

onChange={(e)=>setAbout(e.target.value)}

></textarea>

<button type="submit">

Generate Roadmap

</button>
</form>

{profile && (

<div className="profile-card">

<h2>Career Profile</h2>

<p><strong>Name:</strong> {profile.name}</p>

<p><strong>College:</strong> {profile.college}</p>

<p><strong>Branch:</strong> {profile.branch}</p>

<p><strong>CGPA:</strong> {profile.cgpa}</p>

<p><strong>Domain:</strong> {profile.domain}</p>

<p><strong>About:</strong> {profile.about}</p>

</div>

)}
    </>
)
}



export default CareerForm;

