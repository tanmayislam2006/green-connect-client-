import { use } from "react";
import GreenContext from "../../Context/GreenContext";
import { Link } from "react-router";
import { toast } from "react-toastify";

const UserDropdown = () => {
  const { user, logoutUser } = use(GreenContext);
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
      {user && (
        <>
          <li>
            <Link className="text-gray-500" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logoutUser()
      .then((res) => {
        toast.success("Logout Successful");
      })
      .catch((err) => toast.error("Logout Failed " + err.message));
  };
  return (
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
  );
};
export default UserDropdown;
