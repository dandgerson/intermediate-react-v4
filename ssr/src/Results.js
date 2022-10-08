import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            description={pet.description}
          />
        ))
      )}
    </div>
  );
};

export default Results;
