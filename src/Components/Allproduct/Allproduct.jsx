import "./Allproduct.css"
import Item from "../Item/Item";
import { useState, useEffect } from "react";

function Allproduct(){

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const filterCategory = (category) => {
        setSelectedCategory(category);
    } 

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/getProducts.php`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log("ERROR: ", err)); 
    }, []);

    return(
    <div className="Main-container">
        <div className="Category">
            <select id="category"
            value={selectedCategory}
            onChange={(e) => filterCategory(e.target.value)}>
                <option value="" disabled selected>Category</option>
                <option value="All">All</option>
                <option value="Pants">Pants</option>
                <option value="Tshirt">T-shirt</option>
                <option value="Hoodie">Hoodie</option>
            </select>
            <div className="right-category">
                <p>Explore our newest streetwear collection.</p>
            </div>
        </div>

        <div className="Allproducts">
            {products
            .filter(product => 
                selectedCategory === "" ||
                selectedCategory === "All" ||
                product.category === selectedCategory
            )
            .map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    </div>

    );
}
export default Allproduct;