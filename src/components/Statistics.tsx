import "./Statistics.css";
import AnimatedCounter from "./AnimatedCounter";

function Statistics() {

    const stats = [

        {
            number: 1000,
            title: "Students Guided",
            icon: "🎓"
        },

        {
            number: 500,
            title: "Roadmaps Created",
            icon: "🗺️"
        },

        {
            number: 95,
            title: "ATS Score Accuracy",
            icon: "📄"
        },

        {
            number: 24,
            title: "AI Career Mentor",
            icon: "🤖"
        }

    ];

    return (

        <section className="statistics">

            <h2>Our Impact</h2>

            <p>
                Helping students become placement ready with AI.
            </p>

            <div className="stats-grid">

                {

                    stats.map((stat)=>(

                        <div className="stat-card" key={stat.title}>

                            <h1>{stat.icon}</h1>

                            <AnimatedCounter target={stat.number} />

                            <p>{stat.title}</p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Statistics;