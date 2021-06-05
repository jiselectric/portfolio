import React from 'react';

function Contact() {
    return (
        <div className="contact-wrapper">
            <p className="contact-title"> Contact_ </p>
            <p className="contact-hi"> Great insights are infeasible without collaboration. Let's get together. </p>
            <div className="contact-btn-wrapper">
                <button className="contact-btn" onClick={() => window.open("mailto:kimcer@bc.edu", "__blank")}> Contact Me </button>
            </div>
        </div>
    )
}

export default Contact;