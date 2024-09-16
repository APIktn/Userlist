import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
