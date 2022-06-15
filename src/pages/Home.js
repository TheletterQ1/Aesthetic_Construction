import React from "react";
import "../App.css";
import "../pages/Home.css";
import house from "../Images/house.png";
import brush from "../Images/brush.png";
import commercial from "../Images/commercial-building.png";
import saw from "../Images/saw.png";
import example1 from "../Images/redhouse.jpg";
import example2 from "../Images/bar.jpg";
import patio from "../Images/palazo2.jpg";
import cali from "../Images/california.png";
import az from "../Images/arizona.png";
import { Link } from "react-router-dom";



export const Home = () => {
  return (
    <div id="home">
      <div id="icon-container">
        <div className="icon-div">
          <img id="house" className="icons" src={house} alt="home" />
          <Link className="home_links" to="/Residential">
            Residential
          </Link>
        </div>
        <div className="icon-div">
          <img
            id="commercial"
            className="icons"
            src={commercial}
            alt="commercial-building"
          />
          <Link className="home_links" to="/Commercial">
            Commercial
          </Link>
        </div>
        <div className="icon-div">
          <img id="brush" className="icons" src={brush} alt="brush" />
          <Link className="home_links" to="/Remodels">
            Remodels
          </Link>
        </div>
        <div className="icon-div">
          <img id="saw" className="icons" src={saw} alt="" />
          <Link className="home_links" to="/Custom">
            Custom
          </Link>
        </div>
        {/* <div id="states">
          <div>
            <img
              id="flags"
              className="icons"
              src={cali}
              alt="california-flag"
            />
            <img id="flags2" className="icons" src={az} alt="arizona-flag" />
            <p>Multi-State</p>
          </div>
        </div> */}
      </div>
      <br />
      <section id="home-main">
        <br />
        <h2 id="home-title">You Dream It. We Build It</h2>
        <p id="home-description">
          Specializing in refreshing remodels, custom carpentry, and all
          commercial and residential needs.{" "}
        </p>
        <div id="home-main-img-container">
          <h2>From Full Home Rennovations</h2>
          <img className="home-main-img" src={example1} alt="kitchen" />
          
          <Link className="home_links" to="/Custom">
            See Project
          </Link>
            {/* <button className="proj-links"> See Project</button> */}
          
          <h2>And Commercial Remodels</h2>
          <img className="home-main-img" src={example2} alt="kitchen" />
          {/* <button className="proj-links"> See Project</button> */}
          <Link className="home_links" to="/Commercial">
            See Project
          </Link>
          <h2>To Completely Custom Builds</h2>
          <img className="home-main-img" src={patio} alt="patio" />
          <button className="proj-links"> See Project</button>
        </div>
      </section>
    </div>
  );
};
export default Home;
