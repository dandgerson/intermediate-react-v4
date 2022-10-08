import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: Number(event.target.dataset.index),
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="w-full flex gap-2">
        <img className="" src={images[active]} alt="animal" />
        <div className="flex gap-1">
          {images.map((image, i) => (
            // eslint-disable-next-line
            <img
              src={image}
              alt="animal thumbnail"
              key={image}
              data-index={i}
              className={[
                "w-24 h-24 rounded-full border-2 border-grey-100",
                i === active ? "opacity-80" : "",
              ].join(" ")}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
