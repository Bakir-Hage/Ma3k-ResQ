import React from 'react';
import { FiPhone, FiMapPin, FiStar, FiNavigation, FiMap } from 'react-icons/fi';
import './ServiceCard.css';

export default function ServiceCard({ name, rating, distance, address, onCall, onMap }) {
  return (
    <div className="horizontal-card">
      <div className="card-body">
        <div className="info-section">
          <h3 className="service-name">{name}</h3>

          <div className="meta-data">
            <span className="rating">
              <FiStar className="icon-gold" /> {rating}
            </span>
            <span className="distance">
              <FiNavigation /> {distance} km
            </span>
          </div>

          <div className="location">
            <FiMapPin className="icon-gray" />
            <span>{address}</span>
          </div>
        </div>

        <div className="action-row">
          <button className="btn-call" onClick={onCall}>
            <FiPhone /> Call Now
          </button>
          <button className="btn-map" onClick={onMap}>
            <FiMap /> Open Map
          </button>
        </div>
      </div>
    </div>
  );
};
