import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
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
    console.log("Submit clicked");

    try {
      const API = import.meta.env.VITE_API_URL;

      const { data } = await axios.post(
        `${API}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true },
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.replace("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <h3>Open a free demat and trading account online</h3>
          <p className="text-muted fs-4 mt-3">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-6 mt-5 text-center p-5">
            <img
              src="media/images/account_open.svg"
              alt=""
              style={{ width: "60vh", marginLeft: "100px" }}
            />
          </div>
          <div className="col-6 p-5">
            <h4 className="mt-5">Signup now</h4>
            <p className="text-muted">Or track your existing application</p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  style={{ width: "55%", padding: "1rem" }}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2 mb-4">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  style={{ width: "55%", padding: "1rem" }}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <button
                className="p-2 btn btn-primary fs-5 mb-5"
                style={{
                  width: "35%",
                  height: "10%",
                  margin: "0 auto",
                  borderRadius: "4px",
                }}
              >
                Signup
              </button>
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
