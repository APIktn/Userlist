import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import UserListPage from "../pages/๊UserListPage";
import UserProfilePage from "../pages/UserProfilePage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userlist" element={<UserListPage />} />
        <Route path="/userprofile/:id" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
