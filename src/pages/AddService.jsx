import { useState } from "react";
import "./AddService.css";

function AddService() {

  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      serviceName,
      serviceType,
      description,
      price,
      phone,
      location
    };

    console.log("New Service:", newService);

    alert("Service added successfully!");
  };

  return (
    <div className="add-service-page">
      <div className="add-service-container">

        <h1 className="add-service-title">Add Your Service</h1>

        <p className="add-service-subtitle">
          Add your road assistance service and reach more customers.
        </p>

        <form className="add-service-form" onSubmit={handleSubmit}>

          <div>
            <label>Service Name</label>
            <input
              type="text"
              placeholder="Enter service name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Service Type</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="towing">Towing</option>
              <option value="battery">Battery Jump Start</option>
              <option value="tire">Tire Change</option>
              <option value="fuel">Fuel Delivery</option>
              <option value="lockout">Lockout Service</option>
              <option value="repair">Minor Repair</option>
            </select>
          </div>

          <div>
            <label>Description</label>
            <textarea
              placeholder="Describe your service"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <button className="add-service-button" type="submit">
            Add Service
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddService;