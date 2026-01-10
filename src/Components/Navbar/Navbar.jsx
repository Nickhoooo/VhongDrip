import logo from "../assets/logo2.png";
import Cart from "../assets/CartIcon.png";
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../././././/../Context/CartContext";
import { useState } from "react";
import list from "../assets/list.png";


function Navbar() {

    const [open, setOpen] = useState(false);
    const { cartItems } = useContext(CartContext);

    const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
    );



    // for change ng color every pages yung font
    const location = useLocation();

    
    let textColor = "#ecececff";

  
    if (location.pathname.startsWith("/product/")) {
        textColor = "#000000ff"; 
    }
    if (location.pathname === "/shop") {
        textColor = "#000000ff"; 
    } 
    if (location.pathname === "/promo"){
        textColor = "#000000ff"
    }
    if (location.pathname.startsWith("/promo/")) {
        textColor = "#000000ff"
    }
    if (location.pathname === "/DetailsProduct"){
        textColor = "#000000ff"
    } 
    if (location.pathname === "/login"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/signup"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/cart"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/company"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/contact"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/about"){
        textColor = "#000000ff"
    }
    if (location.pathname === "/PromoDetails"){
        textColor = "#000000ff"
    }
  


    const user = JSON.parse(localStorage.getItem("user"));
    const logoname = `VhongDrip Store${user ? ` — Welcome back, ${user.username}` : ""}`;


    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

  

    return (
        <div className="Header" style={{ color: textColor }}>
            <div className="LogoName">
                <img src={logo} alt="Logo" />
                <div className="Logoname-Container">
                    <p style={{ color: "black" }}>VhongDrip</p>
                    {user && <span> Hello! {user.username}</span>}
                </div>
                
            </div>
            
            <nav>
                <Link to="/" style={{ color: textColor }}>Home</Link>
                <Link to="/shop" style={{ color: textColor }}>Shop</Link>
                <Link to="/promo" style={{ color: textColor }}>Promo</Link>
            </nav>

            <div className="buttons-header">
                {user ? (
                    
                    <button onClick={handleLogout} id="LogOut-Button">Logout</button>
                ) : (
                   
                     <div className="auth-wrapper">
                        {/* Burger icon */}
                        <div className="burger" onClick={() => setOpen(!open)}>
                            ☰
                        </div>

                        {/* Buttons */}
                        <div className={`auth-buttons ${open ? "active" : ""}`}>
                            <Link to="/login">
                            <button id="Login-button">Log-in</button>
                            </Link>

                            <Link to="/signup">
                            <button id="Signup-Button">Sign-up</button>
                            </Link>
                        </div>
                        </div>
                )}

                <Link to="/cart">
                    <img src={Cart} alt="Cart" id="CartImage"/>
                </Link>
                <div className="CartCount">{cartCount}</div>
            </div>
        </div>
    );
}

export default Navbar;
