import React from 'react'
import '../css/Project.css';

const Project = () => {
    return (
        <div className="project-main-div" id="project">
            <div className="project-sub-div" data-aos="fade-up">
                <h1>PROJECTS</h1>
                <hr className="underline"/>
            </div>

            <div className="proj-div" style={{marginTop:"6rem"}} data-aos="fade-right">
                <h3 style={{padding:"0 2rem", fontWeight:"700"}}>Quora for College</h3>
                <div className="container">
                    <div className="row">
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Project overview</h4>
                            <p style={{fontSize:"1.1rem", marginTop:"1.2rem"}}>A MERN stack website where junior students can ask questions, queries about college
                            administration, syllabus, study materials, etc. and senior students can answer to those questions and give
                            invaluable advices to juniors. Seniors can upload their class notes, study materials, syllabus etc in this
                            website and junior students can download the study materials.</p>
                        </div>
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Skills used</h4>
                            <div className="skills" style={{marginTop:"1.2rem"}}>
                                <div className="skill">React</div>
                                <div className="skill">Node.js</div>
                                <div className="skill">Express</div>
                                <div className="skill">MongoDB Atlas</div>
                                <div className="skill">Heroku</div>
                                <div className="skill">GIT</div>
                            </div>
                        </div>
                        <button className="live-btn"><a href="https://qcollege.herokuapp.com/" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"1rem", fontWeight:"700"}}>LIVE DEMO</a></button>
                        <button className="code-btn"><a href="https://github.com/mr-who-0903/quora_for_college" target="_blank" style={{textDecoration:"none", color:"rgb(211,46,94)", fontSize:"1rem", fontWeight:"700"}}>SOURCE CODE</a></button>
                    </div>
                </div>
            </div>

            {/* <hr style={{borderTop:"1px solid #afa9a9", width:"80%"}}/> */}

            <div className="proj-div" style={{marginTop:"6rem"}} data-aos="fade-left">
                <h3 style={{padding:"0 2rem", fontWeight:"700"}}>Recentile Chrome Extension</h3>
                <div className="container">
                    <div className="row">
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Project overview</h4>
                            <p style={{fontSize:"1.1rem", marginTop:"1.2rem"}}>This extension keeps track of links of all the web pages you visited recently so you can
                            quickly backtrack and revisit the desired webpage. It lets you highlight important texts on web pages.</p>
                        </div>
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Skills used</h4>
                            <div className="skills" style={{marginTop:"1.2rem"}}>
                                <div className="skill">Chrome Developer Tools</div>
                                <div className="skill">JavaScript</div>
                                <div className="skill">GIT</div>
                            </div>
                        </div>
                        <button className="live-btn"><a href="https://github.com/mr-who-0903/Recentile" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"1rem", fontWeight:"700"}}>LIVE DEMO</a></button>
                        <button className="code-btn"><a href="https://github.com/mr-who-0903/Recentile" target="_blank" style={{textDecoration:"none", color:"rgb(211,46,94)", fontSize:"1rem", fontWeight:"700"}}>SOURCE CODE</a></button>
                    </div>
                </div>
            </div>

            {/* <hr style={{borderTop:"1px solid #afa9a9", width:"80%"}}/> */}

            <div className="proj-div" style={{marginTop:"6rem", marginBottom:"6rem"}} data-aos="fade-right">
                <h3 style={{padding:"0 2rem", fontWeight:"700"}}>The BlackJack</h3>
                <div className="container">
                    <div className="row">
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Project overview</h4>
                            <p style={{fontSize:"1.1rem", marginTop:"1.2rem"}}>A game played between user and the computer. Algorithm works on probability
                            of winning the game by the computer.</p>
                        </div>
                        <div className="columns col-sm-6 col-12" style={{padding:"0 2rem", marginTop:"1.5rem"}}>
                            <h4>Skills used</h4>
                            <div className="skills" style={{marginTop:"1.2rem"}}>
                                <div className="skill">JavaScript</div>
                                <div className="skill">GIT</div>
                            </div>
                        </div>
                        <button className="live-btn"><a href="https://mr-who-0903.github.io/BlackjackWeb/" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"1rem", fontWeight:"700"}}>LIVE DEMO</a></button>
                        <button className="code-btn"><a href="https://github.com/mr-who-0903/BlackjackWeb" target="_blank" style={{textDecoration:"none", color:"rgb(211,46,94)", fontSize:"1rem", fontWeight:"700"}}>SOURCE CODE</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project
