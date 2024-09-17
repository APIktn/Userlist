import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import twopeople from "../assets/image/two_people.png";
import lotpeople from "../assets/image/lot_people.png";

function Landingpage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
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
              onClick={() => navigate("/login")}
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
      <main className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-20 flex flex-col-reverse lg:flex-row items-center lg:justify-between text-center lg:text-left">
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-start">
            <img
              src={twopeople}
              alt="two people talk each orther"
              className="w-full h-auto max-w-md"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              ร่วมเป็นส่วนหนึ่งของ{" "}
              <span className="font-medium text-yellow-500">USERHUB</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-4">
              แพลตฟอร์มที่รวบรวมผู้ใช้งานจากทุกที่ ให้คุณได้พบเพื่อนใหม่
              ขยายเครือข่าย สร้างความสัมพันธ์ที่ยั่งยืน
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-4">
              ไม่ว่าคุณจะเป็นนักธุรกิจ ผู้สร้างคอนเทนต์
              หรือแค่คนที่ต้องการพบปะผู้คนใหม่ๆ USERHUB ยินดีต้อนรับคุณ!
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium">
              สมัครสมาชิกวันนี้และเริ่มต้นเดินทางสู่การเชื่อมต่อที่ไม่มีวันสิ้นสุด
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Landingpage;
