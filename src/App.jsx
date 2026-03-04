import "./App.css";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="appShell">
      <NavBar />
      <div className="appContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
