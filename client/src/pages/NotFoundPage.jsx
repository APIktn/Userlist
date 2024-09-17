import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-400">
      <div className="text-center">
        <h1 className="lg:text-6xl text-5xl font-bold mb-4 text-black">
          404 Page Not Found
        </h1>
        <p className="text-2xl font-medium text-black">
          ขออภัย ไม่พบหน้าที่คุณกำลังมองหา
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-black border border-black mt-5 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-xl hover:text-opacity-50 hover:border-opacity-50"
        >
          กลับไปหน้า Homepage
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
