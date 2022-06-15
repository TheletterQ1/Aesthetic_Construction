import React from "react";
import "../App.css";
import "./Custom.css";
import trailorOutside from "../Images/trailorOutside.jpg";
import trailorOutside2 from "../Images/trailorOutside2.jpg";
import trailor3 from "../Images/trailor3.jpg";
import trailor4 from "../Images/trailor4.jpg";
import trailor6 from "../Images/trailor6.jpg";
import table from "../Images/table-finished.jpg";
import palazo from "../Images/palazo2.jpg";
import tableOriginal from "../Images/bootleg.jpg";
import table2 from "../Images/bootleg2.jpg";

function Custom() {
  return (
    <div id="custom">
        <h1>Custom Projects</h1>
        <h3>Table = Art</h3>
      <div className="custom-container">
        <img
          className="custom-pics"
          src={tableOriginal}
          alt="Complete Custom Home Remodel"
        />
        <img className="custom-pics" src={table2} alt="Custom Home Remodel" />
        <img className="custom-pics" src={table} alt="Custom Home Remodel" />
        </div>
        <br/><br/>
        <h3>Cargo Trailor = Cozy Home</h3>
        <div className="custom-container">
        <img className="custom-pics" src={trailorOutside} alt="Cargo Trailor" />
        <img className="custom-pics" src={trailorOutside2} alt="Cargo Trailor" />
        <img className="custom-pics" src={trailor3} alt="Remodeled Trailor" />
        <img className="custom-pics" src={trailor4} alt="Remodeled Trailor" />
        <img className="custom-pics" src={trailor6} alt="Remodeled Trailor" />
      </div>
      <br/><br/>
      <h3>Open Event Space</h3>
      <div>
      <br/>
        <img
          className="custom-pics"
          src={palazo}
          alt="Custom Event Space
        "
        />
      </div>
    </div>
  );
}

export default Custom;
