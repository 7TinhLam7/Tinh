import React, {Component} from 'react';
import p1 from './p-1.jpg'; 
import p2 from './p-2.jpg'; 
import p3 from './p-3.jpg'; 


class Portfolio extends Component{
    render(){
        return(
            <div className="refer">
            <h4> PORTFOLIO</h4>
            <div className="ref"> 
            <img src={p1} alt="Logo" />
            <img src={p2} alt="Logo" />
            <img src={p3} alt="Logo" /> 
            
            </div>
            <div className="ref"> 
            <img src={p1} alt="Logo" />
            <img src={p2} alt="Logo" />
            <img src={p3} alt="Logo" /> 
           
            </div>
            </div>

        )
    }
}





export default Portfolio;