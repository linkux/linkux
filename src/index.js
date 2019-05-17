import React from "react";
import ReactDOM from "react-dom";

import ProfileImage from "../src/image.js";
import ImageCarousel from "../src/image_carousel/image_carousel.js";

const Index = () => {
  return (
    <div className="main">
        <div className="profile">
            <ProfileImage image_path="../images/sunset-pexels.jpeg"/>
        </div>
        <div className="slideshow">
            <ImageCarousel/>
        </div>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));