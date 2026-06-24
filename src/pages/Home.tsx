import Header from "../components/Header";
import UploadBox from "../components/UploadBox";
import UserList from "../components/UserList";

function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh"
            }}
        >

            <Header title="AI Career Guidance Platform" />

            <UploadBox />

            <UserList />

        </div>
    );
}

export default Home;