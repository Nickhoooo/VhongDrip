import "./RecomProducts.css";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecomProduct(){
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
   
        fetch("https://vhongdrip.free.nf/api/getProducts.php")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log("ERROR: ", err));


        fetch(`https://vhongdrip.free.nf/api/getProductbyId.php?id=${id}`)
        .then(res => res.json())
        .then(data => setCurrentProduct(data))
        .catch(err => console.log("ERROR: ", err));
    }, [id]);


    const recommended = products.filter(
        product => product.category === currentProduct.category && product.id !== id
    );

    return(
        <div className="RecomMain">
            <div className="RecomText">
                <p>Recommendation</p>
                <hr />
            </div>
            <div className="RecomItems">
                <div className="RecomChild">
                    {recommended.length > 0 ? (
                        recommended.slice(0, 2                 ).map(product => (
                            <Item key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No recommendations available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default RecomProduct;