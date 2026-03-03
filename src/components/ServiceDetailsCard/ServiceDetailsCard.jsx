import "./ServiceDetailsCard.css";
import { Star, MapPin, Phone, Map } from "lucide-react";

function ServiceDetailsCard({
  name,
  rating,
  distance,
  address,
  phone,
  mapLink,
  isOpen24h,
}) {
  const numericRating = Number(rating) || 0;

  return (
    <div className="service-card">
      <div className="service-card-header">
        <h3 className="service-name">{name}</h3>
        {isOpen24h && <span className="badge">24/7</span>}
      </div>

      <div className="service-info-row">
        <div className="rating">
          <Star
            size={18}
            strokeWidth={1.8}
            className={numericRating > 0 ? "star-active" : "star-inactive"}
          />
          <span>{numericRating.toFixed(1)}</span>
        </div>

        <div className="distance">
          <MapPin size={18} strokeWidth={1.8} />
          <span>{distance} km</span>
        </div>
      </div>

      <div className="address">
        <MapPin size={18} strokeWidth={1.8} />
        <span>{address}</span>
      </div>

      <div className="service-actions">
        <a href={`tel:${phone}`} className="btn btn-call">
          <Phone size={20} strokeWidth={1.8} />
          <span>Call Now</span>
        </a>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-map"
        >
          <Map size={20} strokeWidth={1.8} />
          <span>Open Map</span>
        </a>
      </div>
    </div>
  );
}

export default ServiceDetailsCard;