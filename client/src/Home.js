import React, { Component } from 'react';
import './css/Home.css';
import beerPoster from './images/beerPoster.jpg';
import beerLogo from './images/beerMeLogo.png';
import beerBackground from './videos/beerBackground.mp4';

class Home extends Component {

  render() {
    return(
      <div id="home">
        <video id="background-video" loop autoPlay>
        <source src={beerBackground} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Home;
