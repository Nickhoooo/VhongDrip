
import { useState, useEffect } from "react";
import "./PromoItem.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../././././/../Context/CartContext";

function PromoItem({ promo }){
    

    const { addToCart } = useContext(CartContext);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (user) {
            // User is logged in → add to cart
            addToCart(promo, promo);
        } else {
            // User not logged in → redirect to register page
            navigate("/signup");
        }
    };


    

    return(
        <div className="Maincontainer-PI">
            <div className="Left-PI">
                <img src={`${import.meta.env.VITE_BACKEND_URL}/images/${promo.model}`}alt={promo.name} />
            </div>
            
            <div className="Right-PI">
                <p id="Text1">Step into style without breaking the bank.
                </p>
                <p id="Promo-deal">Enjoy up to <span> 50% OFF </span>on selected sneakers, trainers, and casual shoes.
                Grab your pair while stocks last!</p>
                <p id="Newprice"> Now only ₱{promo.newprice}</p>
                <p id="Oldprice"> Original price ₱{promo.oldprice}</p>
                <div className="Diplay-PI">
                    <div className="Left-display">
                        <img src={`${import.meta.env.VITE_BACKEND_URL}/images/${promo.image}`} alt={promo.name} />
                    </div>
                    <div className="Right-display">
                        <p id="Name-product">{promo.name}</p>
                        <p id="Discount">Discount : 20%</p>
                        <button id="Promocartbtn" onClick={handleAddToCart}>Add to cart</button>
                        <Link to={`/promo/${promo.id}`}>
                            <button id="PromoBuybtn">BUY</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PromoItem;