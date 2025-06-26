import React from "react";
import { NavLink, Outlet } from "react-router"; // use react-router-dom instead of just "react-router"
import GreenConnect from "../Components/GreenConnect/GreenConnect";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle checkbox (controls drawer open/close) */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar - shows only on small devices */}
        <div className="navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="Open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 text-lg font-semibold px-2">Dashboard</div>
        </div>

        {/* Dynamic content area */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side">
        {/* Overlay for closing drawer on small screens */}
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {/* Sidebar Menu */}
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content space-y-2">
          {/* Close button for small devices */}
          <div className="lg:hidden flex justify-end mb-2">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </label>
          </div>

          {/* Sidebar navigation links */}
          <li>
            {" "}
            <GreenConnect />
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-primary underline" : "text-gray-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/shareTips"
              className={({ isActive }) =>
                isActive ? "font-bold text-primary underline" : "text-gray-500"
              }
            >
              Share Tips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myTips"
              className={({ isActive }) =>
                isActive ? "font-bold text-primary underline" : "text-gray-500"
              }
            >
              My Tips
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default DashboardLayout;
