import "./App.css";
import LoginAndSignUP from "./components/LoginAndSignup/LoginAndSignUP";
import EmergencyDispatch from "./components/emergencyDispatch/emergencyDispatch";
import Footer from "./components/Footer/Footer";
import Maps from "./Maps";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home/>
      <LoginAndSignUP/>
      <Maps />
      {/* <Maps /> */}
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
