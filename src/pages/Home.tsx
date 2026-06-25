import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
// import UserList from "../components/UserList";
import CareerForm from "../components/CareerForm"
import Features from "../components/Features";

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

            <Hero />

            <UploadBox />

            {/* <UserList /> */}
            <CareerForm />
            <Features />

        </div>
    );
}

export default Home;