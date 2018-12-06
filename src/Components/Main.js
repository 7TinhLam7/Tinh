import React, {Component} from 'react';
import About from  './Maincontent/About'
import Skill from  './Maincontent/Skill'
import Education from  './Maincontent/Education'
import Portfolio from './Maincontent/Portfolio';
import Contact from './Maincontent/Contact';

class Main extends Component {
  render(){
  return (
    <div className="main">
    <About />
    <Skill />
    <Education />
    <Portfolio/>
    <Contact />
    </div>
    
  )
  }
}
export default Main;