import React, { useEffect, useState } from "react";

// import { RideData } from "./RideData";
import axios from "axios";
import RideCard from "../RideCard/RideCard";
// import { Filter } from "../../container";
import { BsFilterLeft } from "react-icons/bs";

import "./Rides.scss";

const Rides = () => {
  const [rideData, setRideData] = useState([]);
  const [user, setUser] = useState({});
  const [nearest, setNearest] = useState(true);
  const [upcoming, setUpcoming] = useState(false);
  const [past, setPast] = useState(false);
  const [filter, setFilter] = useState(false);
  const [nearRideData, setNearRideData] = useState([]);

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) => {
      setRideData(response.data);
      console.log(rideData);
    });
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      setUser(response.data);
    });

    setNearest(true);

    console.log(rideData);
    console.log(nearRideData);
    console.log(differenceArray.key);
    console.log(differenceArray);
    setNearRideData(differenceArray.data);
  }, []);

  const differenceArray = rideData.map((ride) => {
    ride.station_path.sort();
    return {
      key: Math.abs(ride.station_path[0] - user.station_code),
      data: ride,
    };
  });

  differenceArray.sort((a, b) => {
    return a.key - b.key;
  });

  // const near =

  const nearestRides = () => {
    setNearest((nearest) => !nearest);
    if (upcoming === true && past === false) {
      setUpcoming((upcoming) => !upcoming);
    } else if (upcoming === false && past === true) {
      setPast((past) => !past);
    }
  };
  const upcomingRides = () => {
    setUpcoming((upcoming) => !upcoming);
    if (nearest === true && past === false) {
      setNearest((nearest) => !nearest);
    } else if (nearest === false && past === true) {
      setPast((past) => !past);
    }
  };
  const pastRides = () => {
    setPast((past) => !past);
    if (nearest === true && upcoming === false) {
      setNearest((nearest) => !nearest);
    } else if (nearest === false && upcoming === true) {
      setUpcoming((upcoming) => !upcoming);
    }
  };

  const filterToggle = () => {
    setFilter((filter) => !filter);
  };

  const ridesList = rideData.map((ride) => {
    return (
      <RideCard
        key={`${ride.id} ${ride.date}`}
        id={ride.id}
        originStation={ride.origin_station_code}
        stationPath={ride.station_path}
        destinationStationCode={ride.destination_station_code}
        date={ride.date}
        mapURL={ride.map_url}
        state={ride.state}
        city={ride.city}
      />
    );
  });

  return (
    <div className="app__rides-list">
      <div className="app__rides-filters">
        <ul>
          <li
            onClick={nearestRides}
            className={`${nearest ? "active" : ""} app__rides-filter`}
          >
            Nearest rides
          </li>
          <li
            onClick={upcomingRides}
            className={`${upcoming ? "active" : ""} app__rides-filter`}
          >
            Upcoming rides
          </li>
          <li
            onClick={pastRides}
            className={`${past ? "active" : ""} app__rides-filter`}
          >
            Past rides
          </li>
        </ul>
        <div className="app__rides-filterIcon">
          <BsFilterLeft />
          <p onClick={filterToggle}>Filter</p>
          {filter && (
            <div className="app__rides-filterModal">
              <label htmlFor="filter">Filters</label>
              <select name="state" id="state">
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
              <select name="city" id="city">
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="app__rides-card">{ridesList}</div>
    </div>
  );
};

export default Rides;
