import React from 'react'
import '../App.css'
import './Remodel.css'
import balcony1 from "../Images/red-balcony.JPG";
import balcony2 from "../Images/red-balcony2.JPG";
import house from "../Images/red-house.JPG";
import house2 from "../Images/redhouse.jpg";
import stairs from "../Images/red-stairs.JPG";


function Remodel() {
    return (
        <div id='remodel'>
            <h2>Even for Complete Builds and Remodels, there is NO task too big for Aesthetic Construction</h2>
            <br/>
            <div className="custom-container">
        <img
          className="custom-pics"
          src={house}
          alt="Complete Custom Home Remodel"
        />
        <img className="custom-pics" src={house2} alt="Custom Home Remodel" />
        <img className="custom-pics" src={balcony1} alt="Balcony" />
        <img className="custom-pics" src={balcony2} alt="Balcony" />
        <img
          className="custom-pics"
          src={stairs}
          alt="Custome Home Remodel
        "
        />
      </div>
            <br/>
        </div>
    )
}

export default Remodel
