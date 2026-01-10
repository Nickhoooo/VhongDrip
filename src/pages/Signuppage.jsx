import Display from "../Components/assets/FormDisplay.png";
import "./CSS/Signuppage.css"
import GmailImage from "../Components/assets/gmail-account.png";
import FacebookImage from "../Components/assets/facebook-account.png";
import TiktokImage from "../Components/assets/tiktok-account.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Signuppage(){

    useEffect(() => {
            document.body.style.background = "white"; 
            document.body.style.color = "#000"; 
        
            return () => {
              document.body.style.background = "";
              document.body.style.color = "";
            };
          }, []);
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value.trim();
        const name = form.name.value.trim();
        const password = form.password.value;
        const term = form.terms.checked


    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        alert("Invalid email address");
        return;
    } if (name.length < 3) {
        alert ("Username is too short");
        return;
    } if (password.length < 6){
        alert ("your password is too short");
        return;
    } if (!term) {
        alert ("U most accept terms and condition");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("register", 1);

    const res = await fetch("https://vhongs-backend-ffm1k8ldm-nicos-projects-1e62f5d3.vercel.app/api/signup.php", {
        method: "POST",
        credentials: "include", 
        body: formData
    });


    const data = await res.json();

    if (data.status === "success"){
        alert(data.message);
        window.location.href = "/login";
    } else {
        alert(data.message || "An error occurred");
    }

    };

    return(
    <div className="SignUppage-Main">
            <div className="SignUppage">
                
            <div className="FormSignUp-container">
                    <label id="SignUp-Text">Sign-up</label>

                        <form onSubmit={handleSubmit} id="SignUpForm">
                            <input className="Input-SignUp" name="email" type="email" placeholder="Email"/>
                            <input className="Input-SignUp" name="name" type="text" placeholder="Username"/>
                            <input className="Input-SignUp" name="password" type="password" placeholder="Password"/>
                        <div class="CheckLine">
                            <input type="checkbox" name="terms" />
                            <label>By continuing, i agree to the terms of use & privacy and policy.</label>
                        </div>
                            <input type="Submit" value="Submit" id="SubmitBtn"/>
                            
                        </form>

                <div className="social-mediaAcc">
                    <img src={GmailImage} alt="" />
                    <img src={FacebookImage} alt="" />
                    <img src={TiktokImage} alt="" />
                    
                </div>
                <label id="Clickhere">Already hava an account?<Link to={'/login'}><span>Click here</span></Link></label>
            </div>

                <div className="left-imageSignup">
                    <img src={Display} alt="" />
                </div>
                
            </div>
        </div>
    );
}
export default Signuppage;