import "./Hero.css";
import careerImage from "../assets/career.svg";

function Hero() {
    return (

        <section className="hero">

            <div className="hero-left">

                <p className="hero-tag">
                    🚀 AI Powered Career Platform
                </p>

                <h1>

                    Land Your

                    <span> Dream Job </span>

                    with AI

                </h1>

                <p className="hero-description">

                    Analyze your resume, generate personalized career
                    roadmaps, prepare for interviews, and track your
                    placement journey—all in one platform.

                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                        Get Started
                    </button>

                    <button className="secondary-btn">
                        Upload Resume
                    </button>

                </div>

                <div className="hero-stats">

                    ⭐⭐⭐⭐⭐

                    <span>

                        Trusted by 1000+ Students

                    </span>

                </div>

            </div>

            <div className="hero-right">

                <img src={careerImage} alt="Career" />

            </div>

        </section>

    );
}

export default Hero;