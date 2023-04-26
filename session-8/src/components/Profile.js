import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }


    render() {
        return (
        <> 
            <h1>Profile Class Component</h1>
            <h2>Name: {this.props.name}</h2>
            <h3>Count : {this.state.count}</h3>
        </>
        )
    }
}

export default Profile;