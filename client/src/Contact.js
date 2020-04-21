import React from 'react'

const Contact = (props) => (
    <div className={props.isOpen ? "mdl show" : "mdl"}>
        <div className="sidebar">
        <div className="mdl-mask" onClick={props.handleClose}></div>

            <h2>Contact</h2>
            
        </div>
    </div>
);

export default Contact;