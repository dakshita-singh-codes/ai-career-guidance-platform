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

            {
                skills.map((skill) => (
                    <p key={skill}>
                        ✔ {skill}
                    </p>
                ))
            }

        </div>
    );
}

export default SkillList;