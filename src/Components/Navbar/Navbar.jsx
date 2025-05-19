import { Link } from "react-router";
import Logo from "../../assets/green-connect.png";
import ThemeToggle from "../Theme/ThemeToggle";
import { use } from "react";
import GreenContext from "../../Context/GreenContext";
const Navbar = () => {
  const { firebaseUser } = use(GreenContext);
  return (
    <nav className="navbar justify-between  bg-base-100 max-w-7xl mx-auto sticky top-0 z-10 shadow-sm">
      <Link to="/" className="flex items-center">
        <div className="w-16 rounded-full">
          <img alt="green connect logo" src={Logo} className="bg-transparent" />
        </div>
        <p className="font-bold text-xl">Green Connect</p>
      </Link>
      <div className="">
        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <ThemeToggle />
      {firebaseUser ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="USER PHOTO" src="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow space-y-4"
          >
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
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
