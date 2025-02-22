import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto p-4">
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;