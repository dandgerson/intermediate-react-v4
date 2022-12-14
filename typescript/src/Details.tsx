import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { ThemeContext, useThemeContext } from "./ThemeContext";
import { Animal, PetAPIResponse } from "./APIResponsesTypes";

class Details extends Component<{
  params: { id?: string };
  theme: [string, (theme: string) => void];
}> {
  state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "" as Animal,
    breed: "",
    city: "",
    state: "",
    description: "",
    images: [] as string[],
  };

  async componentDidMount() {
    if (!this.props.params.id) return;

    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = (await res.json()) as PetAPIResponse;

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location.href = "https://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { name, animal, breed, city, state, description, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >{`Adopt ${name}`}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal
              clickOutside={this.toggleModal}
              renderContent={() => (
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
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
  const params = useParams<{ id: string }>();

  // make consume context like this preferable in class components
  const theme = useThemeContext();
  return (
    <ErrorBoundary>
      <Details params={params} theme={theme} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
