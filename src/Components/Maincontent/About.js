import React, {Component} from 'react';
import me from './me.jpg'; 

class About extends Component{
    render(){
        return(
        <div className="about">
        <div className="img">
        <img src={me} alt="Logo" />
         <div className="title">
          <p> JOHN DOE</p>
          <p> SOFTWARE ENGINEER </p>
          </div>
        </div>
        <div className="info">
        <h4>ABOUT ME</h4>
          <hr/>
          <p>Lorem Ipsum as their default model text, and a search
            for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
          <br />
          <div className="infom">
            <div className="infom1">
              <p>Age :</p>    
              <p>Address :</p>
              <p>Email :</p>
              <p> Phone :</p>
            </div>
            <div className="infom2">
              <p>23</p>    
              <p>Gò Vấp, Hồ chí Minh City</p>
              <p>tinh3009@gmail.com</p>
              <p> 0962172969</p>
                  
            </div>
          </div>
        </div>

        </div>
        )

    }
}
export default About;