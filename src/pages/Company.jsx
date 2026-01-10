import "../pages/CSS/Company.css";
import Cover from "../Components/assets/Cover-Photo.avif";
import BigLogo from "../Components/assets/BigLogo.png";
import { useEffect } from "react";
function Company(){

    useEffect(() => {
            document.body.style.background = "white"; 
            document.body.style.color = "#000"; 
        
            return () => {
              document.body.style.background = "";
              document.body.style.color = "";
            };
          }, []);

    return(
        <div className="Company-Main">
            <div className="Cover-Company"
            style={{ backgroundImage: `url(${Cover})` }}>
                <p id="Bold">Company</p>
                <p>VhonDrip</p>

            </div>

        <div className="Info-container">
            <div className="Left-logo">
                <img src={BigLogo} alt="" />
            </div>
            <div className="right-info">
                <h1>Company Overview</h1>
                <p>VhonDrip is a sample online clothing store created as a school project.
                It was developed to demonstrate how an e-commerce website works, including product browsing, cart functionality, and basic checkout flow.</p>
                <p>VhonDrip focuses on modern streetwear-inspired fashion and aims to deliver a clean and user-friendly shopping experience.</p>
            </div>
        </div>

        <div className="Team-Comtainer">
            <h1>Team</h1>
            <p>VhonDrip is developed by students as part of a school project, focusing on improving skills in frontend and backend web development.</p>
        </div>

        <div className="Fiveimage_container">
            <img src={BigLogo} alt="" id="img1" />
            <img src={BigLogo} alt="" id="img2" />
            <img src={BigLogo} alt="" id="img3" />
            <img src={BigLogo} alt="" id="img4" />
            <img src={BigLogo} alt="" id="img5" />

        </div>


        </div>
    );
}
export default Company;