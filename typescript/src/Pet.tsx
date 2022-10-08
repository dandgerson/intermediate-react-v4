import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

const Pet: FunctionComponent<{
  name: string;
  animal: Animal;
  breed: string;
  id: number;
  images: string[];
  location: string;
  isLast: boolean;
}> = ({ name, animal, breed, id, images, location, isLast }) => {
  const hero = images[0] || "http://pet-images.dev-apis.com/pets/none.jpg";

  return (
    <Link
      to={`/details/${id}`}
      className="pet"
      style={{
        border: isLast ? "none" : "",
      }}
    >
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
