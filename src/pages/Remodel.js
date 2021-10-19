import React from 'react'
import '../App.css'
import './Remodel.css'
import biltSink from '../Images/biltmoresink.jpg' 
import biltShower from '../Images/biltmore3.jpg'
import biltWall from '../Images/biltmore2.jpg'
import biltToilet from '../Images/biltmore5.jpg'
import cabaloToilet from '../Images/cabalo6.jpg'
import cabaloShower from '../Images/cabalo9.jpg'
import cabaloTub1 from '../Images/cabalo7.jpg'
import cabaloTub2 from '../Images/cabalo8.jpg'
import cabaloDen from '../Images/cabalo.jpg'
import cabaloDen1 from '../Images/cabalo1.jpg'
import cabaloDen2 from '../Images/cabalo2.jpg'
import balcony1 from "../Images/red-balcony.JPG";
import balcony2 from "../Images/red-balcony2.JPG";
import house from "../Images/red-house.JPG";
import house2 from "../Images/redhouse.jpg";
import stairs from "../Images/red-stairs.JPG";


function Remodel() {
    return (
        <div id='remodel'>
            <h2>Even for Complete Builds and Remodels, there is NO task to big for Aesthetic Construction</h2>
            <br/>
            <h3 className='remodel-header'>From  Bathrooms</h3>
            <span className='remodel-detail'>Biltmore Hotel</span>
            <div className='remodel-container'>
            <img src={biltSink} alt='Biltmore sink' className='remodel-pics'/>
            <img src={biltToilet} alt='Biltmore toilet' className='remodel-pics'/>
            <img src={biltShower} alt='Biltmore shower' className='remodel-pics'/>
            <img src={biltWall} alt='Biltmore bathroom wall' className='remodel-pics'/>
            </div>
            <br/>
            <span className='remodel-detail'>Residential</span>
            <div className='remodel-container'>
            <img src={cabaloShower} alt='Residential sink' className='remodel-pics'/>
            <img src={cabaloToilet} alt='Residential toilet' className='remodel-pics'/>
            <img src={cabaloTub1} alt='Residential shower' className='remodel-pics'/>
            <img src={cabaloTub2} alt='Residential bathroom wall' className='remodel-pics'/>
            </div>
            <br/>
            <h3 className='remodel-header'>Dens/Living Rooms</h3>
            <br/>
            <span className='remodel-detail'>Residential</span>
            <div className='remodel-container'>
            <img src={cabaloDen} alt='Residential Den' className='remodel-pics'/>
            <img src={cabaloDen1} alt='Residential Den' className='remodel-pics'/>
            <img src={cabaloDen2} alt='Residential Den' className='remodel-pics'/>
            </div> <br/>
            <h3 className='remodel-header'>Anything you need</h3>
            <br/>
        </div>
    )
}

export default Remodel
