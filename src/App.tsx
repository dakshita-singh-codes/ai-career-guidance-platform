import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
// import SkillList from "./components/SkillList";
import Navbar from "./components/Navbar";

function App() {
  return (
<>
  <Navbar />

  <div
    style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"80vh"
    }}
  >

    <Header title="AI Career Guidance Platform"/>

    <UploadBox/>
    {/* <SkillList/> */}
  </div>
</>
  );
}

export default App;