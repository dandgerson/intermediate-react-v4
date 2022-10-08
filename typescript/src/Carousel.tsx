import { Component, MouseEventHandler } from "react";

class Carousel extends Component<{ images: string[] }> {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick: MouseEventHandler<HTMLImageElement> = (event) => {
    const target = event.target as HTMLImageElement;
    this.setState({
      active: Number(target.dataset.index),
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, i) => (
            // eslint-disable-next-line
            <img
              src={image}
              alt="animal thumbnail"
              key={image}
              data-index={i}
              className={i === active ? "active" : ""}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
