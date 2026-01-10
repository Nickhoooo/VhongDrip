import ProductDetails from "../Components/ProductDetails/ProductDetails";
import RecomProduct from "../Components/RecomProducts/RecomProducts";
import "../pages/CSS/DetailsProduct.css";
import { useEffect } from "react";

function DetailsProduct(){
    useEffect(() => {
    document.body.style.background = "white"; 
    document.body.style.color = "#000"; 

    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);
  
    return(
        <div>
            <ProductDetails/>
            <RecomProduct/>
        </div>
    );
}
export default DetailsProduct;