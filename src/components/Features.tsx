import "./Features.css";

function Features() {

    const features = [
        {
            title: "📄 Resume Analysis",
            description: "Upload your resume and get AI-powered ATS score, skill analysis, and improvement suggestions."
        },
        {
            title: "🎯 Career Roadmap",
            description: "Receive a personalized roadmap based on your career goal, current skills, and experience."
        },
        {
            title: "💼 Job Match",
            description: "Compare your profile with job descriptions and discover missing skills and match percentage."
        },
        {
            title: "🎤 AI Mock Interview",
            description: "Practice technical and HR interviews with AI-generated questions and detailed feedback."
        }
    ];

    return (
        <section className="features">

            <h1>Powerful AI Features</h1>

            <p className="subtitle">
                Everything you need to prepare for placements in one platform.
            </p>

            <div className="feature-grid">

                {
                    features.map((feature) => (

                        <div className="feature-card" key={feature.title}>

                            <h2>{feature.title}</h2>

                            <p>{feature.description}</p>

                        </div>

                    ))
                }

            </div>

        </section>
    );
}

export default Features;