import { FunctionComponent } from "react";
import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./Pet";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div className="results">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet, i, self) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            isLast={!self[i + 1]}
          />
        ))
      )}
    </div>
  );
};

export default Results;
