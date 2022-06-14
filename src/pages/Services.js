import React from 'react'
import '../App.css'
import services from '../Images/Aesthetic-Serv-prop.jpg'

const Services = () => (
  
        <div>
            <h2>Our Services</h2>
            <p>Thank you for taking the time to visit our site,creating,building,remodeling,and working with our amazing clients is our passion. We look forward to working with you on your projects.</p>
            <h3>Remodel</h3>
            <p>We specialize in custom remodels that help make your space feel comfortable, clean, and most importantly, inspired by you. We loveworking with our clients one-on-one to create the space of your dreams. <span>Call or Email</span> for a custom quote.</p>
            <h3>Fix it</h3>
            <p>Need help fixing something? We got you..FILL IN THE BLANK</p>
            <h3>Something More?</h3>
            <p>We can support you with your residential and commercial remodels and so much more. If  you dont see what you're looking for here, connect! We can help</p>
            <img id='services'src={services} alt='custom rennovations'/>
        </div>
    )
export default Services