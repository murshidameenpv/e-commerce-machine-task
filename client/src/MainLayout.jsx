
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function MainLayout() {

  return (
    <div>
        <div>
          <Navbar/>
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer/>
        </div>
    </div>
  );
}

export default MainLayout;
