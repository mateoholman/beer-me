import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/Home.css';
// import beerPoster from './images/beerPoster.jpg';
import beerLogo from './images/hop2.png';
import beerBackground from './videos/beerBackground.mp4';

class Home extends Component {

  render() {
    return(
      <div className="home">
        <div className="video-overlay">
          <img className="home-logo" src={beerLogo} alt="Beer is cool" />
          <h1>Beer Me!</h1>
          <p><Link to="/signin">sign-in</Link> | <Link to='/signup'>sign-up</Link></p>
        </div>
        <video id="background-video" loop autoPlay>
        <source src={beerBackground} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Home;
