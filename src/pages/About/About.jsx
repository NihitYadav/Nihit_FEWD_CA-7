import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookKeeper</h2>
            <p className='fs-17'>Our goal is to make all the books free for all to read. Readers should have access to all the books they want to read.</p>
            <p className='fs-17'>This project was built by Nihit Yadav.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
