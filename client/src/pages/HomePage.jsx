import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import lotpeople from "../assets/image/lot_people.png";
import NavbarUser from "./components/NavbarUser";
import MainHomePage from "./components/MainHomepage";

function Landingpage() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarUser />
      <header className="bg-yellow-400 pt-16 pb-10">
        <div className="container mx-auto px-4 md:px-20 py-5 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between text-center lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              สร้างสังคมออนไลน์
            </h1>{" "}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              ที่แข็งแกร่งไปกับเรา
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl mt-4 font-medium text-white">
              เข้าร่วมกับสังคมผู้ใช้งานคุณภาพ
              เพื่อเชื่อมต่อและขยายความสัมพันธ์ที่มั่นคง
            </p>
            <button
              onClick={() => navigate("/userlist")}
              className="mt-8 px-6 py-3 bg-white text-yellow-500 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-100 transition duration-300"
            >
              เข้าร่วมกับเรา
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={lotpeople}
              alt="Community of all people"
              className="sm:w-[700px] w-[400px]"
            />
          </div>
        </div>
      </header>
      <MainHomePage />
      <Footer />
    </>
  );
}

export default Landingpage;
