import { Link } from "react-router-dom";
import "./ServiceBanner.css";

function ServiceBanner({ to = "/add-service" }) {
  return (
    <section className="service-banner">
      <div className="service-container">

        <div className="service-left">
          <div className="service-heading">
            <div className="service-icon"></div>
            <h2>Do You Own a Road Service?</h2>
          </div>

          <p>Join our platform and grow your customer base!</p>
        </div>

        <Link to={to} className="service-button"> 
          + Add Your Service
        </Link>

      </div>
    </section>
  );
}

export default ServiceBanner;