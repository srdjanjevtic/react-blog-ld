import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
        <main className="py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout