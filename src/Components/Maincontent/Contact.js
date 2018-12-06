import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="map">
      <div>
        
        <div id="map" style={{width: 400, height: 300}}></div>
      </div>
    
  

        </div>



        <div className="inform">
          <div className=" ctitle">
            <h4>Contact</h4>
          </div>

          <div className="formm">
            <form className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  tabindex="4"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-start-order">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
