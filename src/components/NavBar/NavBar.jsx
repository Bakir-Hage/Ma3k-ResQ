import { Link } from "react-router-dom";
import "./NavBar.css";
import { MapPin } from "lucide-react";
export default function NavBar() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <Link to="/" className="brand-link">
            <div className="brand-icon-wrapper">
              <MapPin className="brand-icon" fill="currentColor" />
            </div>
            <span className="brand-title">Ma3k ResQ</span>
          </Link>

          <nav className="desktop-navigation">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="garage" className="nav-link">
              Garage & Parts
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
