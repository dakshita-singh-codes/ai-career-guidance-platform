import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
// import UserList from "../components/UserList";
import CareerForm from "../components/CareerForm"
import Features from "../components/Features";
import Statistics from "../components/Statistics";

function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                minHeight: "80vh"
            }}
        >

            <Hero />
            <div style={{ width: "100%" }}>
    <Statistics />
</div>
            <UploadBox />

            {/* <UserList /> */}
            <CareerForm />
            <Features />

        </div>
    );
}

export default Home;