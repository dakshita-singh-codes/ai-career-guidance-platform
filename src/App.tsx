import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
// import SkillList from "./components/SkillList";

function App() {
  return (
    <div
style={{
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}}
>
      <Header title="AI Career Guidance Platform" />
      <UploadBox />
      {/* <SkillList /> */}
    </div>
  );
}

export default App;