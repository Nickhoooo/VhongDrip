import "../pages/CSS/Company.css";
import Cover from "../Components/assets/Cover-Photo.avif";
import BigLogo from "../Components/assets/BigLogo.png";
import Jhiro from "../Components/assets/Jhiro.png";
import Nico from "../Components/assets/Dumayas.png";
import Gomez from "../Components/assets/Gomez.jpg";
import Artiaga from "../Components/assets/Artiaga.jpg";
import Apilado from "../Components/assets/Apilado.jpg";
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
             {/**First card */}
            <div className="card">
                <div className="content">
                <div className="front">
                    <img
                        src={Jhiro}
                        alt="front"
                        className="img"
                    />
                    <div className="front-content">
                        <div className="title">
                        <p>Jhiro</p>
                        </div>
                        <div className="card-footer">Footer</div>
                    </div>
                </div>

                    <div className="back">
                        <div className="back-content">UI / UX Designer</div>
                        <div className="glow" />
                    </div>
                </div>  
            </div>
             {/**Second card */}
            <div className="card">
                <div className="content">
                <div className="front">
                    <img
                        src={Apilado}
                        alt="front"
                        className="img"
                    />
                    <div className="front-content">
                        <div className="title">
                        <p>Apilado</p>
                        </div>
                        <div className="card-footer">Footer</div>
                    </div>
                </div>

                    <div className="back">
                        <div className="back-content">Backend Developer Auth Security</div>
                        <div className="glow" />
                    </div>
                </div>  
            </div>
            {/**Third card */}
            <div className="card">
                <div className="content">
                <div className="front">
                    <img
                        src={Artiaga}
                        alt="front"
                        className="img"
                    />
                    <div className="front-content">
                        <div className="title">
                        <p>Artiaga</p>
                        </div>
                        <div className="card-footer">Footer</div>
                    </div>
                </div>

                    <div className="back">
                        <div className="back-content">Backend Developer API</div>
                        <div className="glow" />
                    </div>
                </div>  
            </div>
            {/**fourth card */}
            <div className="card">
                <div className="content">
                <div className="front">
                    <img
                        src={Gomez}
                        alt="front"
                        className="img"
                    />
                    <div className="front-content">
                        <div className="title">
                        <p>Gomez</p>
                        </div>
                        <div className="card-footer">Footer</div>
                    </div>
                </div>

                    <div className="back">
                        <div className="back-content">Frontend Developer Logic Integration</div>
                        <div className="glow" />
                    </div>
                </div>  
            </div>
            {/**panglima card */}
            <div className="card">
                <div className="content">
                <div className="front">
                    <img
                        src={Nico}
                        alt="front"
                        className="img"
                    />
                    <div className="front-content">
                        <div className="title">
                        <p>Dumayas</p>
                        </div>
                        <div className="card-footer">Footer</div>
                    </div>
                </div>

                    <div className="back">
                        <div className="back-content">Frontend Developer Layout Components</div>
                        <div className="glow" />
                    </div>
                </div>  
            </div>


        </div>


    </div>
    );
}
export default Company;