import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/intro.css'

const Intro = () => {
  return (
    <div className="intro--container">
      <div className="intro-text--wrapper">
        <div className="intro--title">
          <h4>Aloe there! Welcome to</h4>
          <h1>Plant Buddy</h1>
        </div>
        <div className="intro--description">
          <p>
            Have you <i>botany</i> plants recently? Are your plants looking unbe-<i>leaf</i>-ably unhealthy? 
          </p>
          <p>
            You'll be re-<i>leaved</i> to hear that this app contains all the information you need to raise strong, healthy plants.
          </p>
          <p>
            You can use the search bar if you are looking for information on a specific plant, or you can browse through the gallery and click on the plant to get more information.
          </p>
          <p>
            Get started, and blow your <i>stalks</i> off!
          </p>
        </div>
      </div>
      <div className="search-btn" id="home-btn">
        <Link id="home-link" to="/home">Get Started</Link>
      </div>
    </div>
  )
}

export default Intro