import React from 'react'
import '../App.css'
import './Commercial.css'
import gateway from '../Images/wall1.jpg'
import sign from '../Images/sign.jpg'
import bar from '../Images/bar.jpg'
import barfloor from '../Images/bar-floor.jpg'
import barview from '../Images/bar-view.jpg'
import barfloor2 from '../Images/bar_floor.jpg'
import bar2 from '../Images/bar2.jpg'
import bar4 from '../Images/bar4.jpg'
import barcomplete from '../Images/barcomplete.jpg'
import lobby2 from '../Images/lobby2.jpg'
import lobby5 from '../Images/lobby5.jpg'
import lobby6 from '../Images/lobby6.jpg'

function Commercial() {
    return (
        <div>
            <h1>Commercial Remodels and Projects</h1>
            <div>
                <h2>Sign For Local Eatery</h2>
                <div>
                <img id='sign' className="custom-pics" src={sign} alt='Sign For Local Restaurant'/>
                </div>
                <h3>Heightened Gateway</h3>
                <div>
                <img id='gateway' className="custom-pics" src={gateway} alt='Arched Gateway'/>
                </div>
                <h2>Bar Interior Remodel</h2>
                <div className='custom-container'>
                <img className="custom-pics" src={bar} alt='Interior Bar Remodel'/>
                <img className="custom-pics" src={barfloor} alt='Bar Floor'/>
                <img className="custom-pics" src={bar2} alt='Remodeled Bar'/>
                <img className="custom-pics" src={barview} alt='Bar Entrancer View'/>
                <img className="custom-pics" src={barcomplete} alt='Finished Bar'/>
                </div>
                <br/>
                <h2>Lobby Remodel</h2>
                <div className='custom-container'>
                <img className="custom-pics" src={lobby6} alt='Lobby'/>
                <img className="custom-pics" src={lobby5} alt='Lobby'/>
                <img className="custom-pics" src={lobby2} alt='Lobby'/>
                </div>
            </div>
            
        </div>
    )
}

export default Commercial
