import Display from "../Components/assets/FormDisplay.png";
import GmailImage from "../Components/assets/gmail-account.png";
import FacebookImage from "../Components/assets/facebook-account.png";
import TiktokImage from "../Components/assets/tiktok-account.png";
import { Link } from "react-router-dom";
import "./CSS/Loginpage.css";
import { useEffect } from "react";
function Loginpage(){
    useEffect(() => {
        document.body.style.background = "white"; 
        document.body.style.color = "#000"; 
    
        return () => {
          document.body.style.background = "";
          document.body.style.color = "";
        };
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target);
        formData.append("login", 1);

        const res = await fetch("http://localhost/VhongWebsite/backend/api/login.php", {
            method: "POST",
            credentials: "include", 
            body: formData
        });


        const data = await res.json();

        if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";
        } else {
        alert(data.message);
        }
    };


    return(
        <div className="Loginpage-Main">
            <div className="Loginpage">
                
            <div className="FormLogin-container">
                    <label id="Login-Text">Log-in</label>
                <form onSubmit={handleSubmit} id="LoginForm">
                    <input className="Input-Login" name="email" type="email" placeholder="Email"/>
                    <input className="Input-Login" name="password" type="password" placeholder="Password"/>
                <div class="CheckLine">
                    <input type="checkbox" name="terms"/>
                    <label>By continuing, i agree to the terms of use & privacy and policy.</label>
                </div>
                    <input className="Input-Login" type="Submit" value="Submit" id="SubmitBtn-Login"/>
                    
                </form>

                <div className="social-mediaAcc">
                    <img src={GmailImage} alt="" />
                    <img src={FacebookImage} alt="" />
                    <img src={TiktokImage} alt="" />
                </div>
                <label id="Clickhere">Dont hava an account?<Link to={'/signup'}><span>Click here</span></Link></label>
            </div>

                <div className="left-imageLogin">
                    <img src={Display} alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Loginpage;