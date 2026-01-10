import { useEffect } from "react";
import Allproduct from "../Components/Allproduct/Allproduct";
import PremiumStyle from "../Components/PremiumStyle/PremiumStyle";
import "../pages/CSS/Shop.css";

function Shop() {
  useEffect(() => {
    document.body.style.background = "white"; 
    document.body.style.color = "#000"; 

    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div>
      <PremiumStyle />   
      <Allproduct />         
    </div>
  );
}

export default Shop;
