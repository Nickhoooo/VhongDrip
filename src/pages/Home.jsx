
import Hero from "../Components/Hero/Hero"
import BestSeller from "../Components/BestSeller/BestSeller";
import "./CSS/Home.css";
import Exlusiveoffer from "../Components/ExlusiveOffer/ExlusiveOffer";
import NewCollection from "../Components/NewCollection/NewCollection";


function Home(){
    return(
        <div>
            <Hero/>
            <BestSeller/>
            <Exlusiveoffer/>
            <NewCollection/>
        </div>
    )
}

export default Home; 