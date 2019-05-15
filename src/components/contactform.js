import React from 'react';
import PropTypes from "prop-types";
  
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  
  render() {
    return (
    <div id="contact">
        <form className="col-lg-6 col-12 mx-auto text-center border border-dark rounded" action="https://formspree.io/scottyh527@gmail.com" method="POST">
            <h1 className="mt-3">Contact Me</h1>
            <div className="col-6 mx-auto d-flex flex-column">
                <input className="col-12 mb-3 form-control" type="email" name="_replyto" placeholder="Your email"/>
                <textarea className="col-12 mb-3" type="text" name="name" placeholder="Your message"/>
                <input className="col-6 mx-auto mb-3 btn btn-primary btn-lg" type="submit" value="Send"/>
            </div>
        </form>
    </div>
    );
  }
}

