import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, id, images, location }) => {
  const getImage = () => {
    if (Array.isArray(images) && images.length) {
      return images[0];
    }

    return "http://pet-images.dev-apis.com/pets/none.jpg";
  };
  const hero = getImage();

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} data-testid="thumbnail" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
