import { Link, NavLink } from "react-router";
import Logo from "../../assets/green-connect.png";
import { use } from "react";
import GreenContext from "../../Context/GreenContext";
import { toast } from "react-toastify";
import {
  FaHome,
  FaSeedling,
  FaUserFriends,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import ThemeToggle from "../../Components/Theme/ThemeToggle";
import UserDropdown from "./UserDropdown";

const DashboardNavbar = () => {
  const { user } = use(GreenContext);

  const links = <></>;

  return (
    <>
      <nav className="navbar hidden lg:flex justify-between  bg-base-100 max-w-7xl mx-auto sticky top-0 z-10 shadow-sm">
        <Link to={"/dashboard"} className="flex items-center">
          <p className="font-bold text-xl hidden md:block text-primary">
            DashBoard
          </p>
        </Link>
        <div className="">
          <ul className="hidden lg:flex gap-6">{links}</ul>
        </div>
        <ThemeToggle />
        {user ? (
          <UserDropdown />
        ) : (
          <div className="">
            <Link
              className="bg-primary px-4 py-2 rounded-xl text-white font-bold"
              to="/login"
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-base-100 border-t border-gray-200 shadow lg:hidden">
        <ul className="flex justify-around items-center py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaHome size={22} />
              <span className="text-xs">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exploreGardener"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaUserFriends size={22} />
              <span className="text-xs">Gardeners</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browseTips"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaSeedling size={22} />
              <span className="text-xs">Tips</span>
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/shareTips"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center text-primary"
                      : "flex flex-col items-center text-gray-500"
                  }
                >
                  <FaPlus size={22} />
                  <span className="text-xs">Share</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center text-primary"
                      : "flex flex-col items-center text-gray-500"
                  }
                >
                  <FaUser size={22} />
                  <span className="text-xs">My Tips</span>
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default DashboardNavbar;
