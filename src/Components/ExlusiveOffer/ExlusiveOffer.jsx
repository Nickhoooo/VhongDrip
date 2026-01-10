import ExlusiveBanner from "../assets/erasebg-transformed.png";
import React from "react";
import "./ExlusiveOffer.css";

function ExlusiveOffer(){
    return(
        <div className="Exlusive-main">
            <div className="Left-container">
                <img src={ExlusiveBanner} alt="" />
            </div>
            <div className="Right-container">
                <p id="Exlusive-Bold">Exlusive<br/>
                Offer For You</p>
                <p id="Exlusive-Text">ONLY ON THE BEST PRODUCTS</p>
                <button>Check Now</button>
            </div>
        </div>
        
    )
}
export default ExlusiveOffer;