import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./Navbar"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Menu from "../../pages/Menu"
import Cart from "../../pages/Cart"
import PaymentSucces from "../../pages/Payment-succes"



const NavigationSystem = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment-succes" element={<PaymentSucces />} />
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationSystem