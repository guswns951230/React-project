import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import ReservationPage from "./pages/ReservationPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="reservation" element={<ReservationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
