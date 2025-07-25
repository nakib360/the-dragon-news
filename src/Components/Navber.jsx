import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center m-3">
      <div></div>
      <div className="nav space-x-5">
        <Link
          to={"/"}
          className="relative inline-block px-2 py-1 text-black
          before:absolute before:bottom-0 before:left-0 before:h-[2px]
          before:w-0 before:bg-gray-500 before:transition-all before:duration-300
          hover:before:w-full"
        >
          Home
        </Link>
        <Link
          to={"/career"}
          className="relative inline-block px-2 py-1 text-black
          before:absolute before:bottom-0 before:left-0 before:h-[2px]
          before:w-0 before:bg-gray-500 before:transition-all before:duration-300
          hover:before:w-full"
        >
          Career
        </Link>
        <Link
          to={"/about"}
          className="relative inline-block px-2 py-1 text-black
          before:absolute before:bottom-0 before:left-0 before:h-[2px]
          before:w-0 before:bg-gray-500 before:transition-all before:duration-300
          hover:before:w-full"
        >
          About
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {user && user?.email ? (
          <div>
            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>
        ) : (
          <img src={userImg} alt="" />
        )}
        {user && user?.email ? (
          <NavLink onClick={logOut} className="text-white p-3 bg-black">
            Log out
          </NavLink>
        ) : (
          <NavLink to={"/auth/login"} className="text-white p-3 bg-black">
            Log in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
