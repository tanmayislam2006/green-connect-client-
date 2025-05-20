import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/green-connect.png";
import GreenContext from "../../Context/GreenContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { googleLogin, errorMessage, setErrorMessage, loginUser } =
    use(GreenContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          // update log in information   in db
          fetch("http://localhost:5000/login", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: user?.email,
              lastSignInTime: user?.metadata?.lastSignInTime,
            }),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
        navigate(location?.state || "/");

        toast.success("Login successful!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          // update information in db
          fetch("http://localhost:5000/login", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: user?.email,
              lastSignInTime: user?.metadata?.lastSignInTime,
            }),
          })
            .then((res) => res.json())
            .then((data) => {});
        }
        navigate(location?.state || "/");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white  rounded-lg shadow-md overflow-hidden">
        <div className="bg-accent p-6 text-center">
          <img
            src={Logo}
            alt="Green Connect Logo"
            className="h-16 mx-auto mb-2"
          />
          <h2 className="text-xl font-bold text-white">Welcome Back</h2>
          <p className="text-white">Connect with your gardening community</p>
        </div>

        <div className="p-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors mb-4"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-bold"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder=""
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 font-bold"
              >
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary cursor-pointer text-white py-2 px-4 rounded-md hover:bg-[#3e8e41] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Log In
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
            <p className="mt-2 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
