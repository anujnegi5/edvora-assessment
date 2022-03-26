import React, { useEffect, useState } from "react";

import "./Navbar.scss";
import "../../App.scss";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Edvora</h1>
      </div>
      <div className="app__navbar-profile">
        <p className="app__navbar-profileName">{user.name}</p>
        <div className="app__navbar-profileImg">
          <a href="#">
            <img src={user.url} alt="avatar" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
