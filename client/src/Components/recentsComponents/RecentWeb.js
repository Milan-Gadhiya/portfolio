import React from "react";

export default function RecentWeb(props) {
  const { website } = props;
  return (
    <div className="shop col-lg-3 col-md-4 col-sm-6">
      <div className="shopBack">
        <img src={website.image} alt={website.name}  />
        <div className="shoplebal">
          <a href={website.projectLink} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      <div className="shoptext">
        <p>{website.name}</p>
        <h3>{website.description.substring(0, 50)}....</h3>
      </div>
    </div>
  );
}
