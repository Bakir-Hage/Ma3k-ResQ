import { useNavigate } from "react-router-dom";
import "./ServiceBanner.css";

function ServiceBanner() {
  const navigate = useNavigate();

  const handleAddService = () => {
    // نتحقق إذا المستخدم مسجل دخول
    const user = localStorage.getItem("user");

    if (user) {
      // إذا مسجل دخول
      navigate("/add-service");
    } else {
      // إذا ليس مسجل دخول
      navigate("/login");
    }
  };

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

        <button className="service-button" onClick={handleAddService}>
          + Add Your Service
        </button>

      </div>
    </section>
  );
}

export default ServiceBanner;