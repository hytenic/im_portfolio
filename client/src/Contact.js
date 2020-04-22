import React from 'react'

const Contact = (props) => (
    <div className={props.isOpen ? "mdl show" : "mdl"}>
        <div className="sidebar">
            {/* <div className="mdl-mask" onClick={props.handleClose}></div> */}
            <span className="backButton" onClick={props.handleClose}>X</span>
            <h2>Contact</h2>
            <div>
                <input className="contactInput" type="text" placeholder="name" name="name"></input>
            </div>
            <div>
                <input className="contactInput" type="text" placeholder="email" name="email"></input>
            </div>
            <div>
                <textarea className="contactInput" type="text" placeholder="message" name="message"></textarea>
            </div>
            <button className="submitButton" type="submit">submit</button>
        </div>
    </div>
);

export default Contact;