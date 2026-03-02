import "./App.css";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import LoginAndSignUP from "./components/LoginAndSignup/LoginAndSignUP";
import Maps from "./Maps";
import Home from "./pages/Home";

function App() {

const centers = [
  {
    id: 1,
    name: "Al-Najah Auto Care",
    rating: 4.7,
    distance: 1.8,
    address: "Al-Murjan, Reina",
  },
  {
    id: 2,
    name: "Quick Fix Garage",
    rating: 4.5,
    distance: 3.2,
    address: "Al-Olaya, Nazareth",
  },
  {
    id: 3,
    name: "Elite Motors",
    rating: 4.9,
    distance: 0.5,
    address: "Al-Malqa, Om-Alfahem",
  },
];

  return (
    <>
      <Home />
      <LoginAndSignUP />
      <Maps />
      {centers.map((center) => (
        <ServiceCard
          key={center.id}
          name={center.name}
          rating={center.rating}
          distance={center.distance}
          address={center.address}
          onCall={() => alert(`Calling ${center.name}...`)}
          onMap={() => window.open("https://maps.google.com")}
        />
      ))}
    </>
  );
}

export default App;
