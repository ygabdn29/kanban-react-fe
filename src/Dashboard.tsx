import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Dashboard() {
  return (
    <div className="font-plusJakarta flex lg:flex-col max-h-fit min-h-screen ">
      <Navbar></Navbar>

      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
