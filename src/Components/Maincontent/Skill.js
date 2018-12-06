import React, {Component} from 'react';

class Skill extends Component{
    render(){
        return(
            <div className="sk"> 
          <h4>  SKILL </h4> 
        <div className="skill">
        <div className="html" >
         <h3>Html / CSS</h3>
        <div><span>83% </span></div>
        </div>
        <div className="js">
        <h3>javascript</h3>
        <div><span>70% </span></div>
        </div>
        <div className="tw">
         <h3>Teamworks</h3>
        <div><span>50% </span></div>
        </div>
        <div className="En">
        <h3>English</h3>
        <div><span>60% </span></div>
        </div>
        </div>
        </div> 
        )
        }
    }

export default Skill;