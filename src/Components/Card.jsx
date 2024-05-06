import React from "react";

const Card = ({ image, title, desc }) => {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
