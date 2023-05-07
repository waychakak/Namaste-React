import { useState } from "react";
import { Link } from "react-router-dom";

const LoggedInUser = () => {
    return true;
}

const Title = () => (
    <Link to="/">
        <img alt="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" />
    </Link>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="header">
            <Title />
            <ul>
                <Link to="/"><li>Home </li> </Link>
                <Link to="/about"><li>About </li></Link>
                <Link to="/contact"><li>Contact Us</li> </Link>
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