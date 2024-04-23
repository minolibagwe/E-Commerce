import React from "react";
import family from "../Assets/family.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home_main">
      <div className="Home_left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="Home_line">
            <p>New</p>
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="home_latest_button">
          <div>Latest collections</div>
        </div>
      </div>
      <div className="home_right">
        <img src={family} alt="" />
      </div>
    </div>
  );
};

export default Home;
