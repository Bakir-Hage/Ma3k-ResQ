import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import "./PlacesCard.css";
export default function PlacesCard({ services }){
 const navigate = useNavigate();
 
  const handleViewService = (type) => {
  navigate(`/ServiceListPage/${type}`);
};

  return (
    <div className="services-grid">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="service-card">
            <div className="service-card-media">
              <img
                src={service.image}
                alt={service.title}
                className="service-card-image"
              />

              <div className={`service-card-overlay ${service.color}`} />

              <div className="service-card-icon-wrapper">
                <Icon className="service-card-icon" strokeWidth={1.5} />
              </div>
            </div>

            <div className="service-card-content">
              <h3 className="service-card-title">{service.title}</h3>

              <p className="service-card-description">{service.desc}</p>

              <button
                onClick={() => handleViewService(service.type)}
                className={`service-card-action ${service.color}`}
              >
                <Search className="service-card-action-icon" />
                View Places
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
