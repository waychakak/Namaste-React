import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
    return(
        <>
            <h1>This is About Us Page.</h1>
            {/* <Outlet /> */}
            <Profile name={"Akshay Waychal"} />
        </>
    )
}

export default About; 