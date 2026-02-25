import "./Footer.css";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-header">
                <RiMapPin2Fill className="brand-icon" />
                <span className="brand-name">Ma3k ResQ</span>
              </div>
              <p className="brand-description">
                Reliable roadside assistance 24/7
              </p>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <FaPhoneAlt className="contact-icon" />
                  <span>+972 53 239 6470</span>
                </div>
                <div className="contact-item">
                  <CiMail className="contact-icon" />
                  <span>info@ma3kresq.com</span>
                </div>
              </div>
            </div>

            <div className="footer-hours">
              <h3 className="footer-title">Working Hours</h3>
              <p className="hours-text">Available 24/7</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Ma3k ResQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
