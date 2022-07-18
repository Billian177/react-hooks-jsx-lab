import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>One thing you are going to love about this guy is that everything you need is under one head.
      Just access it with a line of code!
    </p>
    <img src={image} alt="I made this"/>
    </div>;
}

export default About;
