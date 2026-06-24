import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
// import SkillList from "./components/SkillList";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

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
    <UserList />
    {/* <SkillList/> */}
  </div>
</>
  );
}

export default App;