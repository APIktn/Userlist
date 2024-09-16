function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-400">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-black">
          404 Page Not Found
        </h1>
        <p className="text-2xl font-medium text-black">
          ขออภัย ไม่พบหน้าที่คุณกำลังมองหา
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
