import React, { Component } from "react";

class about extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <hr></hr>
        <h3>Personal</h3>
        <p>I love computers, programming, coffee, and things related to those things. </p>
        <p>Currently looking for a job in the IT field or for freelance work, both front-end and back-end.</p>
        <hr></hr>
        <h3>Education</h3>
        <h4>High School</h4>
        <h5>FECAP - Fundação Escola Alvares Penteado</h5>
        <p className='smalltext'>From 2018 To Today</p>
        <p className='smalltext'>Getting my High School degree alongside a certificate in Administration.</p>
        <hr></hr>
        <h3>Job Experiences</h3>
        <p> Eager to have my first.</p>
      </div>
    );
  }
}
 
export default about;