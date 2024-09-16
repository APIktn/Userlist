function Landingpage() {
  return (
    <>
      <header className="bg-blue-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-20 grid lg:grid-cols-2 justify-items-stretch items-stretch">
          <div className="relative">
            <h1 className="text-[40px] sm:text-4xl lg:text-5xl lg:pt-20 pt-[56px] font-semibold text-blue-700">
              เรื่องบ้าน...
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mt-[16px] lg:mt-4 font-medium">
              สะดวก ราคาคุ้มค่า เชื่อถือได้
            </p>
            <div className="text-[#646C80] mt-[32px] lg:mt-[39px] text-lg sm:text-lg lg:text-lg font-medium">
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
