import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="conatiner mt-5">
      <div className="row p-5">
        <div className="col-6 ps-5">
          <img src={imageURL} alt={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="pe-5">{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px" }}
              className="text-decoration-none"
            >
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt=""
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
