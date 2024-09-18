import Footer from "./components/Footer";
import NavbarUser from "./components/NavbarUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../assets/image/avatar.webp";

function UserListPage() {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mainHeightClass, setMainHeightClass] = useState("");

  const navigate = useNavigate();

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = response.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(response.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setSearchText(input);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/alluser?keywords=${searchText}`
        );
        setResponse(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [searchText]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  useEffect(() => {
    if (currentItems.length <= 3) {
      setMainHeightClass("h-[465px]");
    } else {
      setMainHeightClass("");
    }
  }, [currentItems]);

  const getAvatarSrc = (user) => {
    if (user) {
      if (!user.image) {
        return avatar;
      }
    }
    return user.image;
  };

  return (
    <>
      <NavbarUser />
      <header className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4 md:px-20 py-5 flex items-center justify-center gap-5 text-center">
          <p className="text-2xl sm:text-5xl mt-4 font-medium">
            Bringing Your Users to the Spotlight
          </p>
        </div>
      </header>
      <search>
        <div className="container mx-auto px-4 md:px-20 mt-5">
          <input
            type="text"
            placeholder="ค้นหาผู้ใช้งานของ Userhub"
            value={searchText}
            onChange={handleInput}
            className="w-full p-2 border rounded-lg hover:border-yellow-400 focus:outline-yellow-500"
          />
        </div>
      </search>
      <main
        className={`container mx-auto px-4 md:px-20 mt-5 ${mainHeightClass}`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.length > 0 ? (
            currentItems.map((user) => (
              <li
                key={user.id}
                className="border p-0 rounded-lg shadow flex flex-col"
              >
                <div className="bg-yellow-400 p-2 w-full flex flex-row items-center gap-5 rounded-t-lg">
                  <img
                    src={getAvatarSrc(user)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = avatar;
                    }}
                    alt="avatar"
                    className="h-16 w-16 rounded-full border-2 border-white"
                  />
                  <div className="text-center text-2xl font-medium">
                    {user.username}
                  </div>
                </div>
                <hr className="w-full my-0" />
                <div className="p-4 text-left">
                  <div>ชื่อ: {user.firstname}</div>
                  <div>นามสกุล: {user.lastname}</div>
                  <div>อีเมล: {user.email}</div>
                  <button
                    onClick={() => navigate(`/userprofile/${user.id}`)}
                    className="mt-4 text-white bg-yellow-400 hover:bg-yellow-300 px-3 py-1 rounded-lg"
                  >
                    ดูโปรไฟล์
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="col-span-full text-center">No users found.</li>
          )}
        </ul>
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-black border border-black px-3 py-1 rounded-lg hover:text-opacity-50 hover:border-opacity-50"
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-black border border-black px-3 py-1 rounded-lg hover:text-opacity-50 hover:border-opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-center">
          {" "}
          <button
            onClick={() => navigate("/")}
            className="text-black border border-black mt-5 px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium text-xl hover:text-opacity-50 hover:border-opacity-50"
          >
            กลับไปหน้า Homepage
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserListPage;
