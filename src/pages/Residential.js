
import React from "react";
import "../App.css";
import "./Custom.css";
import cabaloToilet from '../Images/cabalo6.jpg'
import cabaloShower from '../Images/cabalo9.jpg'
import cabaloTub1 from '../Images/cabalo7.jpg'
import cabalo5 from '../Images/cabalo5.jpg'
import cabaloDen from '../Images/cabalo.jpg'
import cabaloDen1 from '../Images/cabalo1.jpg'
import cabaloDen2 from '../Images/cabalo2.jpg'
import cabaloKitchen from '../Images/cabaloKitchen.jpg'
import cabaloKitchen2 from '../Images/cabaloKitchen2.JPG'

function Residential() {
    return (
        <div id="custom">
            <h1>We can handle all residential needs</h1>
            <span className='remodel-detail'>Bathrooms</span>
            <div className='remodel-container'>
            <img src={cabaloShower} alt='Residential sink' className='remodel-pics'/>
            <img src={cabalo5} alt='Residential bathroom wall' className='remodel-pics'/>
           
            <img src={cabaloToilet} alt='Residential toilet' className='remodel-pics'/>
            <img src={cabaloTub1} alt='Residential shower' className='remodel-pics'/>
                        </div>
            <br/>
            <h3 className='remodel-header'>Dens/Living Rooms</h3>
            <br/>
            <div className='remodel-container'>
            <img src={cabaloDen} alt='Residential Den' className='remodel-pics'/>
            <img src={cabaloDen1} alt='Residential Den' className='remodel-pics'/>
            <img src={cabaloDen2} alt='Residential Den' className='remodel-pics'/>
            </div> 
            <h3 className='remodel-header'>Kitchens</h3>
            <br/>
            <div className='remodel-container'>
            <img src={cabaloKitchen} alt='Residential Den' className='remodel-pics'/>
           </div>
          
        </div>
      );
}

export default Residential
