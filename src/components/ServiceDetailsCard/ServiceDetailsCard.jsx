import "./ServiceDetailsCard.css";
import { Star, MapPin, Phone, Map } from "lucide-react";
//`Star` is imported but not used.
// The prop shape here does not match the Firestore service shape used in `ServiceCard`. This suggests the project currently has two different service object contracts.
function ServiceDetailsCard({
  name,
  rating,
  distance,
  address,
  phone,
  mapLink,
  isOpen24h,
}) {
  const numericRating = Number(rating) || 0; //`numericRating` is computed but never used. ESLint correctly flags this.

  return (
    <div className="service-card">
      <div className="service-card-header">
        <h3 className="service-name">{name}</h3>
        {isOpen24h && <span className="badge">24/7</span>}
      </div>

      <div className="service-info-row">
        <div className="distance">
          <MapPin size={18} strokeWidth={1.8} />
          <span>{distance} km</span>
          {/* `distance` is displayed as `km`, but there is no guarantee that
          incoming data is already normalized in kilometers. */}
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
