import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { ThemeContext, useThemeContext } from "./ThemeContext";
import { classes as s, themes } from "./style";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { name, animal, breed, city, state, description, images, showModal } =
      this.state;

    return (
      <div className="w-10/12 mx-auto">
        <Carousel images={images} />
        <div className="flex flex-col gap-2 justify-center items-center mt-2">
          <h1 className="text-6xl">{name}</h1>
          <h2 className="text-4xl">{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <>
                <button
                  style={{ backgroundColor: theme }}
                  onClick={this.toggleModal}
                  className={[s.button, "text-xl"].join(" ")}
                >{`Adopt ${name}`}</button>
                <p
                  className="text-xl p-8 rounded-lg"
                  style={{
                    backgroundColor: `rgb(${themes[theme].rgb}, 0.5)`,
                  }}
                >
                  {description}
                </p>
              </>
            )}
          </ThemeContext.Consumer>

          {showModal ? (
            <Modal
              clickOutside={this.toggleModal}
              renderContent={() => (
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="flex gap-4 justify-center items-center">
                    <a href="https://bit.ly/pet-adopt">Yes</a>
                    <button onClick={this.toggleModal}>No</button>
                  </div>
                </div>
              )}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  // make use react hooks in class components with HOC pattern
  const params = useParams();

  // make consume context like this preferable in class components
  const theme = useThemeContext();
  return (
    <ErrorBoundary>
      <Details params={params} theme={theme} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
