import { useState } from "react";
import useAuth from "../contexts/useAuth";
import ExclamationIcon from "../assets/image/exclamation-icon.svg";
import { useNavigate } from "react-router-dom";
import { checkRegisterErrors, updateErrors } from "../middlewares/errors";
import Navbar from "./components/Navbar";
import PolicyPopup from "./components/popup/PolicyPopup";
import TermsPopup from "./components/popup/TermsPopup";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [errors, setErrors] = useState({});
  const { register, state } = useAuth();
  const navigate = useNavigate();
  const [showPolicyPopup, setShowPolicyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    let newErrors = { ...errors };

    if (type === "checkbox") {
      setIsChecked(checked);
      newErrors = updateErrors("isChecked", checked, newErrors);
    } else {
      switch (id) {
        case "username":
          setUsername(value);
          newErrors = updateErrors("username", value, newErrors);
          break;
        case "firstname":
          setFirstname(value);
          newErrors = updateErrors("firstname", value, newErrors);
          break;
        case "lastname":
          setLastname(value);
          newErrors = updateErrors("lastname", value, newErrors);
          break;
        case "email":
          setEmail(value);
          newErrors = updateErrors("email", value, newErrors);
          break;
        case "password":
          setPassword(value);
          newErrors = updateErrors("password", value, newErrors);
          break;
        default:
          break;
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showPolicyPopup || showTermsPopup) {
      return;
    }

    const formData = {
      username,
      email,
      password,
      firstname,
      lastname,
      isChecked,
    };
    const validationErrors = checkRegisterErrors(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      await register(formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-yellow-400">
        <div className="w-11/12 max-w-md p-8 bg-white rounded-lg border border-gray-300 shadow-md absolute top-24 mb-10 md:w-full">
          <h2 className="text-2xl font-medium mb-6 text-center text-black">
            ลงทะเบียน
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-balck"
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
                htmlFor="email"
                className="block text-sm font-medium text-balck"
              >
                อีเมล
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกอีเมล"
                />
                {errors.email && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-balck"
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
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-balck"
              >
                ชื่อ
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.firstname ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกชื่อ"
                />
                {errors.firstname && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-balck"
              >
                นามสกุล
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.lastname ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกนามสกุล"
                />
                {errors.lastname && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
              )}
            </div>

            <div
              className="mb-4 flex items-start"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                <span className={isHovered ? "text-yellow-400" : ""}>
                  ยอมรับ
                </span>{" "}
                <button
                  onClick={() => setShowTermsPopup(true)}
                  className="text-yellow-500 underline font-medium"
                >
                  ข้อตกลงและเงื่อนไข
                </button>{" "}
                และ{" "}
                <button
                  onClick={() => setShowPolicyPopup(true)}
                  className="text-yellow-500 underline font-medium"
                >
                  นโยบายความเป็นส่วนตัว
                </button>
              </label>
            </div>
            {errors.isChecked && (
              <p className="text-red-500 text-xs mt-1">{errors.isChecked}</p>
            )}
            {state.error && (
              <div className="mb-4 text-red-600">{state.error}</div>
            )}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:yellow-500"
              >
                ลงทะเบียน
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/login")}
              className="text-yellow-500 font-medium underline hover:underline"
            >
              กลับไปหน้าเข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
      {showPolicyPopup && (
        <PolicyPopup onClose={() => setShowPolicyPopup(false)} />
      )}{" "}
      {showTermsPopup && (
        <TermsPopup onClose={() => setShowTermsPopup(false)} />
      )}{" "}
    </>
  );
}

export default RegisterPage;
