import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  // static means Carousel.defaultProps exists but not in an instance
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map(photo, index) => (
            <img key={photo} src={photo} className={index === active ? "active": ""} alt="animal thumbnail"/>
          )}
        </div>
      </div>
    );
  }
}
