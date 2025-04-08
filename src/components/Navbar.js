import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/all-cats'>ALL CATS</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
        </nav>
    )
}

export default Navbar