import { Link } from "react-router-dom";
import "./EmergencyButton.css";

export default function EmergencyButton({ emergencyServices }) {
  return (
    <>
      <div className="services-grid">
        {emergencyServices.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.title}
              className={`service-button ${service.color}`}
            >
              <Icon className="service-icon" />
              <Link to={`ServiceDetails/${service.type}`}>
                <span className="service-label">{service.title}</span>
              </Link>
            </button>
          );
        })}
      </div>
    </>
  );
}
