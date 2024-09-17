import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo-cutout.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-black shadow-md w-full sticky top-0 z-50 ">
      <div className="container mx-auto px-4 md:px-20 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="/">
            <img src={Logo} alt="UserHub Logo" className="h-8 sm:h-10 mr-2" />
          </a>
          <a
            href="/"
            className="text-yellow-500 pt-1 sm:pt-0 text-lg sm:text-3xl  font-medium"
          >
            USERHUB
          </a>
        </div>

        <div className="flex items-center ml-2 sm:ml-4">
          <button
            onClick={() => navigate("/login")}
            className="text-yellow-500 border border-yellow-500 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-sm sm:text-base"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
