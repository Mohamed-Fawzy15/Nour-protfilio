import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}
