import Logo from "../../assets/images/logo.png"
import cartIcon from "../../assets/icons/cart.svg"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        
        <nav id="navbar" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="togglecolor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src={Logo} alt="logo" className="w-50 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="/info" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart">
                        <img src={cartIcon} alt="cart" />
                    </Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Sign-up</Link>
                </div>
            </div>

        </nav>
    )
}