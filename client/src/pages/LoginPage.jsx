import { useState } from "react";
import useAuth from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import ExclamationIcon from "../assets/image/exclamation-icon.svg";
import Navbar from "./components/Navbar";
import { checkLoginErrors, updateErrors } from "../middlewares/errors";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, state } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newErrors = { ...errors };

    if (id === "username") {
      setUsername(value);
      newErrors = updateErrors("username", value, newErrors);
    } else if (id === "password") {
      setPassword(value);
      newErrors = updateErrors("password", value, newErrors);
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { username, password };
    const validationErrors = checkLoginErrors(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      await login(formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-yellow-400 flex-col px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-lg border border-gray-300 shadow-md mb-48">
          <h2 className="text-2xl font-medium mb-6 text-center text-black">
            เข้าสู่ระบบ
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                ชื่อผู้ใช้งาน
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="username"
                  id="username"
                  value={username}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกชื่อผู้ใช้งาน"
                />
                {errors.username && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                รหัสผ่าน
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกรหัสผ่าน"
                />
                {errors.password && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            {state.error && (
              <div className="mb-4 text-red-600">{state.error}</div>
            )}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:bg-yellow-600"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
          <div className="mt-4 text-center flex justify-center items-center space-x-1 ">
            <span className="text-black whitespace-nowrap">
              ยังไม่มีบัญชีผู้ใช้ HomeService?
            </span>
            <button
              onClick={() => navigate("/register")}
              className="text-yellow-500 font-medium underline whitespace-nowrap"
            >
              ลงทะเบียน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
