import HeroModel from "../assets/FashionMen.png"
import "./Hero.css";
import { Link } from "react-router-dom";


function Hero(){
    return(
        <div className="Main-hero">
            <div className="Hero-text">
                <p id="text1">Step Up Your Style with VhongDrip</p>
                <p id="text2">Latest drops for every trendsette</p>
                
                <Link to={'/shop'}>
                    <button>Shop Now</button>
                </Link>
                
                
                
                
            </div>
            <div className="Hero-model">
                <img src={HeroModel} alt="" />
            </div>
        </div>
    )
}
export default Hero;