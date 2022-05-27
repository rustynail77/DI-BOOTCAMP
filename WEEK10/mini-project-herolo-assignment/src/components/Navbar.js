import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/favorites'>Favorites</NavLink></li>
                </ul>
                <a href="/"><h1>React Weather App</h1></a>
            </nav>
        </>
    )
}

export default Navbar;