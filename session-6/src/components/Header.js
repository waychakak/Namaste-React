import { useState } from "react";

const LoggedInUser = () => {
    return true;
}

const Title = () => (
    <a href="/">
        <img alt="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="header">
            <Title />
            <ul>
                <li>Home </li>
                <li>About </li>
                <li>Contact Us</li>
            </ul>
            {isLoggedIn ? ( 
            <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
            
        </div>
    )
}

export default Header;