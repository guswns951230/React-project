import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import ReservationPage from "./pages/ReservationPage";
import WelcomePage from "./pages/WelcomePage";
// 공용으로 사용할 datacontext provider
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="LoginPage" element={<LoginPage />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
