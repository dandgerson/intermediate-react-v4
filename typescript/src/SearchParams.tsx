import { useEffect, useState } from "react";
import { Animal, Pet, PetAPIResponse } from "./APIResponsesTypes";
import Results from "./Results";
import { useThemeContext } from "./ThemeContext";
import useBreedList from "./useBreedList";

const ANIMALS: Animal[] = ["dog", "cat", "bird", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("" as Animal);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal as Animal);
  const [theme, setTheme] = useThemeContext();

  console.log({ theme });

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = (await res.json()) as PetAPIResponse;

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value as Animal);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animalName) => (
              <option key={animalName} value={animalName}>
                {animalName}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme
          <select
            name="theme"
            id="theme"
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            onBlur={(e) => {
              setTheme(e.target.value);
            }}
          >
            {["brown", "darkblue", "purple", "hotpink", "green"].map(
              (theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              )
            )}
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
