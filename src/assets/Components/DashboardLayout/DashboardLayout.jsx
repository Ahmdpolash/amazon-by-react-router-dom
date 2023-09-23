import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-10 container mx-auto">
      <div className="w-[20%] bg-red-300 p-5 rounded-md text-2xl">
        <ul >
          <li className="mb-2">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/editProfile">Edit Profile</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
