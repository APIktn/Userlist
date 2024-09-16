import { useState } from "react";
import Logo from "../../assets/image/logo-cutout.png";
import Tel_icon from "../../assets/image/Tel_Icon.png";
import Mail_icon from "../../assets/image/Mail_Icon.png";
import PolicyPopup from "../components/popup/PolicyPopup";
import TermsPopup from "../components/popup/TermsPopup";

const Footer = () => {
  const [showPolicyPopup, setShowPolicyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  const handlePolicyClick = (e) => {
    e.preventDefault();
    setShowPolicyPopup(true);
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTermsPopup(true);
  };

  return (
    <>
      <footer className="bg-white">
        <div className="px-4 sm:px-8 lg:px-28 mt-4 pb-4 pt-4 flex flex-col items-center justify-between">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="Userhub Logo"
                  className="h-8 sm:h-10 mr-2"
                />
                <span className="text-[24px] sm:text-[29.33px] font-medium text-yellow-500">
                  USERHUB
                </span>
              </a>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0 md:ml-4">
              <p className="text-black font-medium">บริษัท ยูเซอร์ฮับ จำกัด</p>
              <p className="text-gray-600 text-sm">
                40 มิตรพันธ์ แขวงป้อมปราบ เขตป้อมปราบศัตรูพ่าย
              </p>
              <p className="text-gray-600 text-sm">กรุงเทพมหานคร 10100</p>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0 md:ml-4">
              <div className="flex items-center justify-center md:justify-start">
                <img src={Tel_icon} alt="Tel_icon" className="mr-2 h-4 w-4" />
                <p className="text-gray-600 text-base">089-205-2646</p>
              </div>
              <div className="flex items-center mt-2 justify-center md:justify-start">
                <img src={Mail_icon} alt="Mail_icon" className="mr-2 h-4 w-4" />
                <p className="text-gray-600 text-base">
                  apisitamornktn@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 lg:px-28 mt-4 pb-4 pt-4 bg-yellow-200">
          <div className="container mx-auto px-4 flex md:flex-row items-center justify-between">
            <p className="text-xs font-normal text-left text-gray-600">
              copyright © 2024 userhub.com
            </p>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="text-gray-600 text-sm underline"
                onClick={handleTermsClick}
              >
                เงื่อนไขและข้อตกลง
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm underline"
                onClick={handlePolicyClick}
              >
                นโยบายความเป็นส่วนตัว
              </a>
            </div>
          </div>
        </div>
      </footer>
      {showPolicyPopup && (
        <PolicyPopup onClose={() => setShowPolicyPopup(false)} />
      )}
      {showTermsPopup && (
        <TermsPopup onClose={() => setShowTermsPopup(false)} />
      )}
    </>
  );
};

export default Footer;
