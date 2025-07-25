import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const loaction = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        navigate(loaction?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(err.message);
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center text-black">
      <div className="card bg-gray-200 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <p className="text-2xl font-semibold text-center">Login your account</p>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full bg-white rounded-none"
              placeholder="Email"
              autoComplete="username"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full bg-white border-none rounded-none"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
            />
            <div>
              {
                error.login && <p className="label text-red-500">{error.login}</p>
              }
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 bg-gray-400 border-none hover:bg-gray-500 rounded-none">
              Login
            </button>
          </form>
          <p className="text-center font-semibold">
            don't have an account? please{" "}
            <NavLink
              className="font-bold text-red-500 hover:text-red-700"
              to={"/auth/register"}
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
