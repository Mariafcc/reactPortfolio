import React from "react";
import Lang from "../Lang";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/style.css"

function About() {
  return (
    <div>
      <h1>About Maria</h1>
      <div>
        Hello,
        <br/>
        I am a web developer based in Chicago, IL. 
        <br/>
        Got my bootcamp certificate in December 2020. 
       <br/>
        Proficient in 
        <Lang />
      </div>
    </div>
  );
}

export default About;
