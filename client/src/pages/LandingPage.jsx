import Navbar from "./components/Navbar";

function Landingpage() {
  return (
    <>
      <Navbar />
      <header className="bg-black">
        <div className="mx-auto px-4 md:px-20 py-5">
          <div>
            <h1 className="text-[40px] sm:text-4xl lg:text-5xl lg:pt-20 pt-[40px] font-semibold text-yellow-500">
              สร้างสังคมออนไลน์ที่แข็งแกร่งไปกับเรา
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mt-[16px] lg:mt-4 font-medium text-white">
              เข้าร่วมกับสังคมผู้ใช้งานคุณภาพ
            </p>
            <div className="text-[#ddd26d] mt-[32px] lg:mt-[39px] text-lg sm:text-lg lg:text-lg font-medium">
              <p>ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์</p>
              <p>ทำความสะอาดบ้าน</p>
              <p>โดยพนักงานแม่บ้าน และช่างมืออาชีพ</p>
            </div>
          </div>
          <div className="justify-self-end self-end"></div>
        </div>
      </header>
    </>
  );
}

export default Landingpage;
