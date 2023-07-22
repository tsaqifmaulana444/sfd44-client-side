import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="flex text-white justify-between my-3">
            <Link to="/">
                <div className="ml-[5vw] p-4 cursor-pointer">
                    <img src={logo} alt="Logo" className="w-[13vw]" />
                </div>
            </Link>
            <div className="list mr-[8vw] flex w-[23vw] justify-between my-auto">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "border-yellow-600 border-b-2" : "hover:border-yellow-600 hover:border-b-2 duration-200"
                }>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "border-yellow-600 border-b-2" : "hover:border-yellow-600 hover:border-b-2 duration-200"
                }>About Us</NavLink>
                <p>Login</p>
                <p>ENG</p>
            </div>
        </div>
    )
}

export default Navbar