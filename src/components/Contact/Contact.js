import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">
                krunal
                <i className="fas fa-at at" />
                sonagram.com               
              </span>
                
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" action="#" class="form-group">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <button type="button" id="submit" class="button btn btn-info btn-lg">Submit</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;