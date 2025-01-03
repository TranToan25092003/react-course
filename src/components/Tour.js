import React from "react";

const Tour = ({ id, on, img, title, text, destination, days, price }) => {
  return (
    <>
      <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{on}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              {destination}
            </p>
            <p>{days} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tour;
