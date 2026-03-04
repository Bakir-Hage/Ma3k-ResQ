import { Link } from "react-router-dom";
import "./EmergencyButton.css";

export default function EmergencyButton({ emergencyServices }) {
  return (
    <div className="emergency-services-grid">
      {emergencyServices.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.title}
            to={`/ServiceDetails/${service.type}`}
            className={`emergency-service-button ${service.color}`}
            aria-label={service.title}
          >
            <Icon className="emergency-service-icon" aria-hidden="true" />
            <span className="emergency-service-label">{service.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
