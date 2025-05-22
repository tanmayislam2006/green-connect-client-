import { Link, NavLink } from "react-router";
import Logo from "../../assets/green-connect.png";
import ThemeToggle from "../Theme/ThemeToggle";
import { use } from "react";
import GreenContext from "../../Context/GreenContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logoutUser, user } = use(GreenContext);
  const handleLogOut = () => {
    logoutUser()
      .then((res) => {
        toast.success("Logout Successful");
      })
      .catch((err) => toast.error("Logout Failed " + err.message));
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-primary underline" : "text-gray-500"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-primary underline" : "text-gray-500"
          }
          to={"/exploreGardener"}
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-primary underline" : "text-gray-500"
          }
          to={"/browseTips"}
        >
          Browse Tips
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primary underline" : "text-gray-500"
              }
              to={"/shareTips"}
            >
              Share Tips
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primary underline" : "text-gray-500"
              }
              to={"/myTips"}
            >
              My Tips
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const dropdownLinks = (
    <>
      <li>
        <Link className="text-gray-500" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-gray-500" to="/exploreGardener">
          Explore Gardeners
        </Link>
      </li>
      <li>
        <Link className="text-gray-500" to="/browseTips">
          Browse Tips
        </Link>
      </li>
      <>
        <li>
          <Link className="text-gray-500" to="/shareTips">
            Share Tips
          </Link>
        </li>
        <li>
          <Link className="text-gray-500" to="/myTips">
            My Tips
          </Link>
        </li>
      </>
    </>
  );

  return (
    <nav className="navbar justify-between  bg-base-100 max-w-7xl mx-auto sticky top-0 z-10 shadow-sm">
      <Link to="/" className="flex items-center">
        <div className="w-16 rounded-full">
          <img alt="green connect logo" src={Logo} className="bg-transparent" />
        </div>
        <p className="font-bold text-xl hidden md:block">Green Connect</p>
      </Link>
      <div className="">
        <ul className="hidden md:flex gap-6">{links}</ul>
      </div>
      <ThemeToggle />
      {user ? (
        <div className="dropdown dropdown-end mr-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar relative group"
          >
            <div className="w-10 rounded-full">
              <img alt="user" src={user?.photoURL} />
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 -bottom-10  bg-gray-800 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
              {user?.fullName}
            </p>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow space-y-4"
          >
            {dropdownLinks}
            {user && (
              <li>
                <button onClick={handleLogOut} className="btn">
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
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
  );
};

export default Navbar;
