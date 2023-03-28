const Title = () => (
    <a href="/">
        <img alt="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg" />
    </a>
)

const Header = () => {
    return(
        <div className="header">
            <Title />
            <ul>
                <li>Home </li>
                <li>About </li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;