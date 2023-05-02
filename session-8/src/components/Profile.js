import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        console.log("constructor")
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        }); 
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log('compoentDIdUpdate');
    }

    componentWillUnmount() {
        //clearInterval()
    }

    render() {
        console.log("render");
        return (
        <> 
            <h1>Profile Class Component</h1>
            <h2>Name: {this?.state?.userInfo?.name}</h2>
            <h3>Location : {this?.state?.userInfo?.location}</h3>
        </>
        )
    }
}

export default Profile;