import "./SkillList.css";
function SkillList() {

    const skills = [
        "React",
        "Node.js",
        "Python",
        "MongoDB"
    ];

    return (
        <div>
            <h2>Skills</h2>
<div className="skills-container"></div>
            {
                skills.map((skill) => (
                    <div className="skill-card" key={skill}>
  {skill}
</div>
                ))
            }

        </div>
    );
}

export default SkillList;