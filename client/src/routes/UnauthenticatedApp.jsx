import { Routes, Route } from "react-router-dom";
import Landingpage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
