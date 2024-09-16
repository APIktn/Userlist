import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
