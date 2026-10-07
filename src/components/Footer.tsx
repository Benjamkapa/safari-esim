import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/safari-esim-logoL.png"
            height={"50px"}
            alt="Safari eSim"
          />
          <p>
            Simple, affordable connectivity for every journey. Buy your eSIM,
            install it in minutes and stay connected.
          </p>
          <div className="contact-mini">
            <span>
              <Mail size={14} /> support@safar-esim.example
            </span>
            <span>
              <MapPin size={14} /> Nairobi, Kenya
            </span>
          </div>
        </div>
        <div>
          <b>Explore</b>
          <Link to="/destinations">Destinations</Link>
          <Link to="/plans">All plans</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/installation-guide">Installation guide</Link>
        </div>
        <div>
          <b>Support</b>
          <Link to="/support">Help centre</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/network-coverage">Network coverage</Link>
        </div>
        <div>
          <b>Company</b>
          <Link to="/about">About Safari eSim</Link>
          <Link to="/terms">Terms & conditions</Link>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/refund-policy">Refund policy</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Safari eSim. All rights reserved.</span>
        <span>Secure travel connectivity.</span>
      </div>
    </footer>
  );
}
