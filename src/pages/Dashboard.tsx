import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-container">

        <div className="dashboard-card resume-card">
          <h2>Resumes Uploaded</h2>
          <p>1</p>
        </div>

        <div className="dashboard-card skills-card">
          <h2>Skills Found</h2>
          <p>4</p>
        </div>

        <div className="dashboard-card career-card">
          <h2>Career Match</h2>
          <p>Data Scientist</p>
        </div>

      </div>
    </>
  );
}

export default Dashboard;