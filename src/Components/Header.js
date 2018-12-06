import React, {Component} from 'react';

class Header extends Component {
  render(){
  return (
    <section id="home">
    <div className="header">

    </div>
    <div className="overlay">
    <div className="navbar"> 
    <ul>
      <li><a href= "/">Home</a></li>
      <li><a href= "/">Skill</a></li>
      <li><a href= "/">Education</a></li>
      <li><a href= "/">Experience</a></li>
      <li><a href= "/">Portfolio</a></li>
      <li><a href= "/">Contact</a></li>
    </ul>
    </div>
    <div className="container">
    <h1><span className="logo">lab</span><small>web / automation development</small></h1>
    <ul className="social-links vertical-list">
						<li><a href="https://twitter.com/labDevelopments" className="btn twitter" >Twitter</a></li>
						<li><a href="https://www.planecode.co.uk" className="btn linkedin" >Blog</a></li>
						<li><a href="https://www.freecodecamp.com/labriffa" className="btn freecodecamp">freeCodeCamp</a></li>
					</ul>	
    
    </div>

    </div>
    </section>
  )
  }
}
export default Header;