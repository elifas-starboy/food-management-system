import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="asset logo" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit dolorum, expedita recusandae similique aut dolores neque corrupti placeat tenetur incidunt consectetur ducimus, ut sunt, illum obcaecati alias! Atque, illo!
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="social icons" />
                    <img src={assets.twitter_icon} alt="social icons" />
                    <img src={assets.linkedin_icon} alt="social icons" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+264 81 333 7777</li>
                    <li>test123@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy; Tomato.com - All Right Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
