import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API = import.meta.env.VITE_API_URL;

      const { data } = await axios.post(
        `${API}/login`,
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        },
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.replace("https://stocker-dashboard-w1it.onrender.com");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      if (error.response) {
        handleError(error.response.data.message);
      } else {
        handleError("Something went wrong");
      }
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <h3>Welcome Back</h3>
          <p className="text-muted fs-4 mt-3">
            Login to access your Zerodha account and continue trading.
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-6 mt-5 text-center p-5">
            <img
              src="media/images/account_open.svg"
              alt="Login"
              style={{ width: "60vh", marginLeft: "100px" }}
            />
          </div>

          <div className="col-6 p-5">
            <h4 className="mt-5">Login</h4>
            <p className="text-muted">
              Enter your registered email and password
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <br />

                <input
                  style={{ width: "55%", padding: "1rem" }}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="mt-2 mb-4">
                <label htmlFor="password">Password</label>
                <br />

                <input
                  style={{ width: "55%", padding: "1rem" }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary fs-5 mb-4"
                style={{
                  width: "35%",
                  borderRadius: "4px",
                }}
              >
                Login
              </button>

              <p>
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Login;
