import "./Item.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../././././/../Context/CartContext";


function Item({ product }){


   const { addToCart } = useContext(CartContext);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (user) {
            // User is logged in → add to cart
            addToCart(product);
        } else {
            // User not logged in → redirect to register page
            navigate("/signup");
        }
    };

    return(
        <div className="Item-Card">
            <img  src={`${import.meta.env.VITE_BACKEND_URL}/images/${product.image}`} alt={product.name} />
            <p id="Product-Name">{product.name}</p>
            <p id="Price">₱{product.price}</p>
            <div className="Buttons-container">
                <button id="AddTocart" onClick={handleAddToCart}>
                    Add to cart
                </button>
                <Link to={`/product/${product.id}`}>
                    <button id="Buy">BUY</button>
                </Link>
            </div>
        </div>
    )
}
export default Item;