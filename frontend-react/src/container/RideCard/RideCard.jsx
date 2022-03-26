import React from "react";

import "./RideCard.scss";

const RideCard = (props) => {
  let stationPath = `[${props.stationPath.join(", ")}]`;
  let dateString = props.date.substring(0, 10);
  // console.log(dateString);
  // console.log(props.id);

  return (
    <div className="app__rideCard">
      <div className="app__rideCard-img">
        <img src={props.mapURL} alt="map" />
      </div>
      <div className="app__rideCard-info">
        <ul>
          <li>
            <span>Ride Id</span> : {props.id}
          </li>
          <li>
            <span>Origin Station</span> : {props.originStation}
          </li>
          <li>
            <span>station_path</span> : {stationPath}
          </li>
          <li>
            <span>Date</span> : {dateString}
          </li>
          <li>
            <span>Distance</span> : {props.originStation - 0}
          </li>
        </ul>
      </div>
      <div className="app__rideCard-location">
        <span>{props.city}</span>
        <span>{props.state}</span>
      </div>
    </div>
  );
};

export default RideCard;
