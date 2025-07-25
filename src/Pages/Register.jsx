import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { registerUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "please enter more than 5 character name" });
      return;
    }
    const url = formData.get("photoUrl");
    const email = formData.get("email");
    const password = formData.get("password");

    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        updateUser({ displayName: name, photoURL: url }).then(() => {
          navigate("/");
        });
      })
  };
  return (
    <div className="min-h-screen flex justify-center items-center text-black">
      <div className="card bg-gray-200 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <p className="text-2xl font-semibold text-center">
          Register your account
        </p>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full bg-white rounded-none"
              placeholder="Name"
              autoComplete="username"
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
            <label className="label">Photo Url</label>
            <input
              name="photoUrl"
              type="url"
              className="input w-full bg-white rounded-none"
              placeholder="Photo url"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full bg-white rounded-none"
              placeholder="Email"
              autoComplete="username"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full bg-white border-none rounded-none"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="btn btn-neutral mt-4 bg-gray-400 border-none hover:bg-gray-500 rounded-none">
              Register
            </button>
          </form>
          <p className="text-center font-semibold">
            if yoy have an account? please{" "}
            <NavLink
              className="font-bold text-red-500 hover:text-red-700"
              to={"/auth/login"}
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
