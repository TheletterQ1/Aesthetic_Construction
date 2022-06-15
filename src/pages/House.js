import React from "react";
import "../App.css";
import redhouse1 from "../Images/red-house.JPG";
import redhouse from "../Images/redhouse.jpg";
import redbalcony from "../Images/red-balcony.JPG";
import redbalcony2 from "../Images/red-balcony2.JPG";
import redstairs from "../Images/red-stairs.JPG";


const House = () => {
    (
        <div>
            <div>
            
        <div id="custom">
            <h1>Full Home Rennovation</h1>
          <div className="custom-container">
            <img
              className="custom-pics"
              src={redhouse1}
              alt="Complete Custom Home Remodel"
            />
            <img className="custom-pics" src={redhouse} alt="Custom Home Remodel" />
            <img className="custom-pics" src={redstairs} alt="Balcony" />
            <img className="custom-pics" src={redbalcony} alt="Balcony" />
            <img
              className="custom-pics"
              src={redbalcony2}
              alt="Custome Home Remodel
            "
            />
          </div>
        </div>
      
    
    
            </div>
        </div>
        )
}

export default House