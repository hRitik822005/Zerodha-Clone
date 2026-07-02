import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <div className="row">
          <h1>Technology</h1>
          <h3 className="text-muted mt-3 fs-4">Sleek, modern and intutive trading platform</h3>
          <p className="mt-3 mb-5">
            Check out our{" "}
            <a href="" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
