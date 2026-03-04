import "./ImplementEmergencyHelpSection.css";

function ImplementEmergencyHelpSection() {
  return (
    <section className="emergency-section">
      <div className="emergency-content">
        <h2 className="emergency-title">Need Immediate Help?</h2>
        <p className="emergency-subtitle">
          Contact us now via WhatsApp or direect call
        </p>
        <div className="emergency-buttons">
          <a href="tel:+972509091031" className="call-button">
            Call Now
          </a>
          <a
            href="https://wa.me/+972509091031"
            target="-blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default ImplementEmergencyHelpSection;
