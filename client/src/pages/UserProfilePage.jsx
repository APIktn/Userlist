import Footer from "./components/Footer";
import NavbarUser from "./components/NavbarUser";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../assets/image/avatar.webp";

function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  const getAvatarSrc = (user) => {
    return user?.image || avatar;
  };

  return (
    <>
      <NavbarUser />
      <div className="flex justify-center  items-center px-4 sm:px-1">
        <div className="border my-12 lg:my-[60px] mx-2 rounded-lg shadow flex flex-col h-auto max-w-3xl w-full">
          <div className="bg-yellow-400 p-5 flex flex-col items-center ">
            <img
              src={getAvatarSrc(user)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = avatar;
              }}
              alt="avatar"
              className="h-40 w-40 sm:h-64 sm:w-64 rounded-full border-2 border-white"
            />
          </div>
          <div className="p-4 text-left text-md flex flex-col gap-3 w-full">
            <div>ID: {user?.id}</div>
            <div>Username: {user?.username}</div>
            <div>ชื่อ: {user?.firstname}</div>
            <div>นามสกุล: {user?.lastname}</div>
            <div>อีเมล: {user?.email}</div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/userlist")}
          className="text-black border border-black mt-5 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-xl hover:text-opacity-50 hover:border-opacity-50"
        >
          กลับไปหน้า Userhub
        </button>
      </div>
      <Footer />
    </>
  );
}

export default UserProfilePage;
