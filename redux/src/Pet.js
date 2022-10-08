import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, id, images, location }) => {
  const hero = images[0] || "http://pet-images.dev-apis.com/pets/none.jpg";

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
