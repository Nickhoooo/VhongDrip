
import StarRate from "../assets/star.png";
import StarNull from "../assets/starnull.png";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "..//../Components/PromoDetails/PromoDetails.css"

function PromoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [promo, setPromo] = useState(null);

  useEffect(() => {
    document.body.style.background = "white";
    document.body.style.color = "#000";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    fetch(`https://vhongdrip.free.nf/api/getPromoproduct.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data); // check structure
        setPromo(data[0] || data); // handle array or object
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!promo) return <p>Loading product...</p>;

  const handleAddToCart = () => {
    if (user) {
      addToCart(promo);
    } else {
      navigate("/signup");
    }
  };

  const promoImages = [promo.model, promo.model, promo.model, promo.model];

  return (
    <div id="MainPromo">
      <div className="MainProduct1">
        <div className="MainProduct1-left">
          <div className="display-4">
            {promoImages.map((img, index) => (
              <img
                key={index}
                src={`https://vhongdrip.free.nf/images/${img}`}
                alt={promo.name}
              />
            ))}
          </div>

          <div className="display-main">
            <img
              src={`https://vhongdrip.free.nf/images/${promo.model}`}
              alt={promo.name}
            />
          </div>
        </div>

        <div className="MainProduct1-right">
          <p id="product-name">{promo.name}</p>
          <div className="Star-container">
            <img src={StarRate} alt="" />
            <img src={StarRate} alt="" />
            <img src={StarRate} alt="" />
            <img src={StarRate} alt="" />
            <img src={StarNull} alt="" />
            <p>(122)</p>
          </div>
          <p id="product-price">Price: ₱{promo.newprice}</p>
          <p id="product-details">
            Limited time promo item. Grab it while stocks last!
          </p>
          <p id="product-category">Category: {promo.category}</p>
          <p id="product-size">Select Size:</p>
          <div className="Sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      <div className="MainProduct2">
        <div className="Description">
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Preview</p>
          </div>
        </div>
        <div className="Description-text">
          <p>
            Welcome to Shop – Fashion for Everyone! At Shop, we bring you
            stylish and affordable clothing for men, women, and kids. From
            everyday wear to the latest trends, our collection is designed to
            keep your whole family looking good and feeling comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PromoDetails;
