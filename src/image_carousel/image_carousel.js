import React from "react";

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <img src="../../icons/right-arrow.svg"/>
    </div>
  );
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <img src="../../icons/left-arrow.svg"/>
    </div>
  );
}

/// Presents images as a carousel with right/left arrows.
/// Used https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4 as reference.
class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
    }
  }

  goToPrevSlide = () => {
    var next_pos = (this.state.images.length + this.state.currentIndex - 1) % this.state.images.length
    return this.setState({
      currentIndex: next_pos
    })
  }
  
  goToNextSlide = () => {
    var next_pos = (this.state.currentIndex + 1) % this.state.images.length
    return this.setState({
      currentIndex: next_pos
    })
  }

  render() {
    return (
      <div className="image_carousel">
        <LeftArrow 
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
        <div className="slide">
          <img src={this.state.images[this.state.currentIndex]}/>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;