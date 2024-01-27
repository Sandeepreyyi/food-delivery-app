import React from "react";
import { ListGroup } from "reactstrap";

import logo from '../../asserts/res-logo.png'
import "./footer.css";

const Footer = () => {
  const handleButtonClick = () => {
    // Add functionality when the arrow button is clicked
    console.log('Arrow button clicked!');
    // Add your logic for the button action here
  };
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>MyPizza</h5>
        <p>Best Pizzas in town, try it out!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </div>
      <div>
        <h6>Contact</h6>
        <p>Location: Mamidipalli,<br></br>India</p>
       <p>Phone : 1098765432</p>
       <p>Email : foodiee@gmail.com</p>
      </div>
      <div>
        <h6>
          NEWSLETTER
        </h6>
        <p>Subscribe our newsletter</p>
        <div className="inputWithArrow">
        <input type="text" placeholder="Email" />
      <button className="arrowButton" onClick={handleButtonClick}>
      ▼
      </button>
</div>
 </div>
      
    </footer>
  );
};

export default Footer;
