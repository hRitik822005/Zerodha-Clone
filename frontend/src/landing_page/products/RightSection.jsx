import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="conatiner mt-5">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5 ">{productName}</h1>
          <p className="pe-5">{productDescription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6 ps-5">
          <img src={imageURL} alt={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
