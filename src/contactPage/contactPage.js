import React from 'react';
import "./contactPage.css";
/**
 * @author Gregory Vincent
 * @date 5/24/22
 */
/**
 *
 * @returns <h1>Get in touch with our management below.</h1>
 * TODO - Finalize a backend framework for the contact form
 * TODO - Start learning that framework, and create the backend for this component
 */
function ContactPage() {
  return (
    <div className="fade-in contact-container">
      <h1>Get in touch with us below</h1>
      <div className="contact-box">
        {/** Form logic for the user */}
        <div className="C-Left">
          <form>
            {/** Row for First and Last name */}
            <div className="input-row">
              <div className="input-group First Name">
                <label>First name</label>
                <input type="text" placeholder="John "></input>
              </div>
              <div className="input-group Last Name">
                <label>Last name</label>
                <input type="text" placeholder="Smith"></input>
              </div>
            </div>

            {/** Row for Address and Subject */}
            <div className="input-row">
              <div className="input-group Address">
                <label>Email</label>
                <input type="email" placeholder="johnsmith@gmail.com"></input>
              </div>
              <div className="input-group Subject">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?"></input>
              </div>
            </div>

            {/**Text Area */}
            <label>Write to Us</label>
            <textarea rows="5"></textarea>
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
        {/** Contact info */}
        <div className="C-Right">
          <h3>Our Info </h3>
          <table>
            <tr>
              <td>Email</td>
              <td>gkvrealestate@gmail.com</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              {/**Demo Number */}
              <td>518-217-8007</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>PO BOX 12451, Albany NY, 12309</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * TODO: Create backend logic needed for this button
 * On click, check form for validity
 * if valid, send the form
 * if it is not valid, tell the user with
 * a brief message
 */
const handleClick = (event) => {
  //stop page from reloading
  event.preventDefault();
  console.log("Button clicked.");
};

export default ContactPage;
