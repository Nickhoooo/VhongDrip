import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./BestSeller.css";
function BestSeller(){
    const [products, setProducts] = useState([]);

fetch("https://vhongs-backend-ffm1k8ldm-nicos-projects-1e62f5d3.vercel.app/api/getProducts.php")
  .then(res => res.json())
  .then(data => setProducts(data))
  .catch(err => console.log("ERROR:", err));


    return(
        <div className="Main-BestSeller">
            <p>Our Best Seller</p>
            <hr />
            <div className="BestSelller-Container">
                <div className="Child-container">
                    {products
                        .filter(product => product.id === "1") 
                        .map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>

                <div className="Child-container">
                    {products
                        .filter(product => product.id === "2") 
                        .map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>

                <div className="Child-container" id="trd-child">
                    {products
                        .filter(product => product.id === "3") 
                        .map(product => (
                        <Item key={product.id} product={product} />
                    ))}
                </div>
            </div> 
        </div>
    )
}
export default BestSeller;