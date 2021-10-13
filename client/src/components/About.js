import React from 'react'
import '../css/About.css';
import cpp from '../c.svg';
import java from '../java.png';
import AOS from 'aos';

AOS.init({
    once: true,
    offset: 300,
    duration: 1000
});

const About = () => {
    return (
        <div className="about-main-div" id="about">
            <div className="about-sub-div" data-aos="fade-up">
                <h1>ABOUT ME</h1>
                <hr className="underline"/>
                <p>I have keen interest in React.js and good experience working accross full-stack of web development with latest MERN technology. </p>
            </div>

            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="columns col-sm-6 col-12" style={{padding:"0 2rem"}}>
                        <h3 style={{color:"black"}}><b>Get to know me!</b></h3>
                        <p style={{lineHeight:"1.8rem"}}>
                        I am a final year B.tech student graduating in <b style={{color:"#585858"}}>Computer Science Engineering </b>
                        from Vellore Institute of Technology, Bhopal. I have keen interest in <b style={{color:"#585858"}}>React.js</b> and good experience working 
                        accross full-stack of web development with latest 
                        <b style={{color:"#585858"}}> MERN technology</b>.<br/>

                        <p style={{marginTop:"1rem"}}> 
                        I'm open to <b style={{color:"#585858"}}>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity 
                        that matches my skills and experience then <a href="#contact" style={{color:"rgb(211,46,94)"}}><b><u>let's have a talk</u></b></a>.
                        </p>
                        </p>

                        
                        <button className="cv-btn">
                            <a href="resume.pdf" download="Ritik Jain Resume" style={{textDecoration:"none", color:"white"}}>Download CV</a>
                        </button>
                     
                    </div>

                    <div className="columns col-sm-6 col-12 skills" style={{padding:"0 2rem"}}>
                        <h3 style={{color:"black"}}><b>My Skills</b></h3>

                        <div className="row">   
                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-react" style={{color:"#18b6e5"}}></i>
                                    <h6>React</h6>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-node-js" style={{color:'green'}}></i>
                                    <h6>Node</h6>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-envira" style={{color:'green'}}></i>
                                    <h6>MongoDB</h6>
                                </div>
                            </div>

                            <div className="col-sm-4 col-6">
                                <div>
                                    <h1 style={{margin:0, height:"2.5rem", color:"#ff8100"}} >ex</h1>
                                    <h6>Express</h6>
                                </div>
                            </div>

                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-sass" style={{color:"#df39b3"}}></i>
                                    <h6>Sass</h6>
                                </div>
                            </div>

                            <div className="col-sm-4 col-6">
                                <div>
                                    <img src={java} style={{width:"2.5rem", height:"2.5rem"}}/>
                                    <h6>Java</h6>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div>
                                    <img src={cpp} style={{width:"2.5rem", height:"2.5rem"}} />
                                    <h6>C++</h6>
                                </div>
                            </div>

                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-git-alt" style={{color:"#ff3b00"}} ></i>
                                    <h6>Git</h6>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div>
                                    <i class="fab fa-github"></i>
                                    <h6>GitHub</h6>
                                </div>
                            </div>
                    
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
