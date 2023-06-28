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

import "./photo.css";

function Photo() {
  const photos = [
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
      <Carousel>
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
