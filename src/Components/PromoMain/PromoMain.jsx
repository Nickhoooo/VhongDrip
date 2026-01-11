import PromoItem from "../PromoItem/PromoItem";
import "./PromoMain.css";
import { useState, useEffect } from "react";


function PromoMain(){

    useEffect(() => {
    document.body.style.background = "white"; 
    document.body.style.color = "#000"; 

    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

    const [promo, setPromo] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/getPromoproduct.php`)
        .then(res => res.json())
        .then(data => setPromo(data))
        .catch(err => console.log("ERROR: ", err));
    }, []);

    return(
        <div className="PromoMain-comtainer">
            <div className="PromoChild-container">
                {promo
                .filter(promo => promo.id === "1")
                .map(promo => {
                    return <PromoItem key={promo.id} promo={promo}/>   
                })}
            </div>
            <div className="PromoChild-container">
                {promo
                .filter(promo => promo.id === "2")
                .map(promo => {
                    return <PromoItem key={promo.id} promo={promo}/>   
                })}
            </div>
             <div className="PromoChild-container">
                {promo
                .filter(promo => promo.id === "3")
                .map(promo => {
                    return <PromoItem key={promo.id} promo={promo}/>   
                })}
            </div>
        </div>
    );
}
export default PromoMain;