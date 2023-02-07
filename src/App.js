import "./App.css";
import Header from "./components/Header.js";
import { Route, Routes, Navigate } from "react-router-dom";
import Randomizer from "./components/Randomizer";
import LegendsScreen from "./components/LegendsScreen";
import WeaponsScreen from "./components/WeaponsScreen";
import MapsScreen from "./components/MapsScreen";
import Auth from "./components/Auth";
import LegendDetails from "./components/LegendDetails";
import AuthContext from "./store/authContext";
import { useContext } from "react";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login-signup" element={<Auth />} />
        <Route
          path="/randomizer"
          element={token ? <Randomizer /> : <Navigate to="/login-signup" />}
        />
        <Route
          path="/legends"
          element={token ? <LegendsScreen /> : <Navigate to="/login-signup" />}
        />
        <Route
          path="/weapons"
          element={token ? <WeaponsScreen /> : <Navigate to="/login-signup" />}
        />
        <Route
          path="/maps"
          element={token ? <MapsScreen /> : <Navigate to="/login-signup" />}
        />
        <Route path="/legend/:id" element={<LegendDetails />} />
        <Route path="*" element={<Navigate to="/randomizer" />} />
      </Routes>
    </div>
  );
}

export default App;
