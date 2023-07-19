import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ml from "./photos/ml2.jpg";
import ml1 from "./photos/ml3.jpg";
import ml2 from "./photos/ml4.jpg";
import ml3 from "./photos/ml5.jpg";
import ml4 from "./photos/ml7.jpeg";
import ml5 from "./photos/ml8.jpg";
import ml8 from "./photos/ml12.jpg";
import ml10 from "./photos/ml14.jpg";
import ml11 from "./photos/ml15.jpg";
import ml12 from "./photos/ml16.jpeg";
import ml13 from "./photos/ml17.jpeg";
import ml14 from "./photos/ml18.jpg";
import ml15 from "./photos/ml19.jpg";
import ml16 from "./photos/ml20.jpg";

import { useEffect } from "react";

import "./photo.css";

function Photo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const photos = [
    { id: 13, image: ml12 },
    { id: 15, image: ml14 },
    { id: 14, image: ml13 },
    { id: 16, image: ml15 },

    { id: 17, image: ml16 },

    { id: 11, image: ml10 },
    { id: 12, image: ml11 },
    { id: 2, image: ml1 },
    { id: 3, image: ml2 },
    { id: 4, image: ml3 },
    { id: 5, image: ml4 },
    { id: 6, image: ml5 },
    { id: 9, image: ml8 },
    { id: 1, image: ml },
  ];

  return (
    <div className="photosbanner">
      <Carousel data-interval="1000">
        {photos.map((photo, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                key={i}
                className="firstphoto"
                src={photo.image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Photo;
