import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo-cutout.png";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../contexts/useAuth";
import logouticon from "../../assets/image/logout-icon.png";
import avatar from "../../assets/image/avatar.webp";

const NavbarUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const { logout } = useAuth();

  const getAvatarSrc = () => {
    if (userData) {
      if (!userData.image) {
        return avatar;
      }
    }
    return userData.image;
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-black shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-20 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="/">
            <img src={Logo} alt="UserHub Logo" className="h-8 sm:h-10 mr-2" />
          </a>
          <a
            href="/"
            className="text-yellow-500 pt-1 sm:pt-0 text-xl sm:text-3xl font-medium"
          >
            USERHUB
          </a>
        </div>

        <div className="relative flex items-center ml-2 sm:ml-4">
          {userData && (
            <>
              <span className="text-white text-m font-normal mt-1">
                {userData.firstname} {userData.lastname}
              </span>
              <button
                className="mr-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  src={getAvatarSrc()}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = avatar;
                  }}
                  alt="avatar"
                  className="h-8 sm:h-8 rounded-full ml-3"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 w-48 mt-[140px] bg-white border border-gray-300 rounded shadow-md dropdown-menu z-50">
                  <ul className="py-1">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleMenuItemClick("/CustomerInfo")}
                    >
                      ข้อมูลผู้ใช้งาน
                    </li>
                    <hr className="border-t-2 border-gray-300" />
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={handleLogout}
                    >
                      <img src={logouticon} alt="logout" className="mr-1 h-5" />
                      ออกจากระบบ
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
