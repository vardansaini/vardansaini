import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import VS from "./images/VS_new.jpg";
import { Carousel } from "react-bootstrap";

function SlideShow() {
  return (
    // <div className='hero-container'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/y9NM_rabQCU"}
            //   src="https://www.youtube.com/embed/sqlaWFy-ywQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <Carousel.Caption>
          <div style={{ color: "black " }}>
            <h3>Social Distribution</h3>
            <p>An open source analysis tool available on Github</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/sqlaWFy-ywQ"}
            //   src="https://www.youtube.com/embed/sqlaWFy-ywQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <Carousel.Caption>
        <div style={{ color: "black " }}>
            <h3>Capstone Dashboard</h3>
            <p>An open source analysis tool available on Github</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/H-Log.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </div>
  );

  // YoutubeEmbed.propTypes = {
  //   embedId: PropTypes.string.isRequired
  // };
}

export default SlideShow;
