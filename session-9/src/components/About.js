import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent const")
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return(
            <>
                <h1>This is About Us Page.</h1>
                {/* <Outlet /> */}
                <Profile />
            </>
        )
    }
}

export default About; 