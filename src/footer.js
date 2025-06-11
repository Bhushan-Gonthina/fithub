import React from "react";
import footlogo from "./footlogo.png";
import "./footer.css";
function Footer(){
    return(
        <div className="foot">
            <div className="foot-logo">
                <img src={footlogo}/>
            </div>
            <div className="footer-links">
                <div className="policy">
                    <h3>Quick Links</h3>
                    <a href="/"><h5>Home</h5></a>
                    <a href="http://localhost:3008/plains"><h5>Services</h5></a>
                    <a href="http://localhost:3008/profile"><h5>Profile</h5></a>
                    <a href="https://bhushan-gonthina.github.io/bhushan.io/"><h5>Portfolio</h5></a>
                    <a href="mailto:bhushanedd@gmail.com"><h5>Contact</h5></a>
                </div>

                <div className="policy">
                    <h3>Social Media Links</h3>
                    <a href="https://www.linkedin.com/in/gonthina-bhushan-8bb231299?utm_source=share&utm_campaign=share_via&utm_
                    content=profile&utm_medium=android_app"><h5>LinkedIn</h5></a>
                    <a href="https://www.instagram.com/mr_losser________?igsh=MWM2eDR2ZHVudzl3cA=="><h5>Instagram</h5></a>
                    <a href="https://x.com/Bhushan90008343?t=P0CeQqNd6f79EyySb86HaA&s=09"><h5>Twitter</h5></a>
                    <a href="https://github.com/Bhushan-Gonthina"><h5>GitHub</h5></a>
                    <a href="https://www.facebook.com/"><h5>Facebook</h5></a>
                </div>

                 <div className="policy">
                    <h3>Legal Links</h3>
                    <a href="#"><h5>Privacy Policy</h5></a>
                    <a href="#"><h5>Terms & Conditions</h5></a>
                    <a href="#"><h5>Disclaimer</h5></a>
                    
                </div>

                <div className="policy">
                    <h3>Contact Information</h3>
                    <h5>bhushanedd@gmail.com</h5>
                    <h5>(+91)9581616566</h5>
                    <h5>5-105,GVP, sontyam,vishakapatnam</h5>
                </div>
            </div>
            <div className="copy-rights">
                <h6>© 2025 Bhushan. All rights reserved.</h6>
            </div>
        </div>
    )
}
export default Footer;