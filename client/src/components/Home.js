import React from 'react'
import '../css/Home.css'

const Home = () => {
    return (
        <div className="home-main-div" id="home">
            <div className="home-sub-div">
                <h1>Hey, I'm Ritik Jain</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                <button><a href="#project" style={{textDecoration:"none", color:"black"}}>PROJECTS</a></button>
            </div>
            <div className="home-scroll">
                <div className="mouse"></div>
            </div>
        </div>
    )
}

export default Home
