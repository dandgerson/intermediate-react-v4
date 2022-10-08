import { useEffect, useState } from "react";
import Results from "./Results";
import { useThemeContext } from "./ThemeContext";
import useBreedList from "./useBreedList";
import { classes as s } from "./style";

const ANIMALS = ["dog", "cat", "bird", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useThemeContext();

  console.log({ theme });

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
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
            className={s.formItem}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            className={s.formItem}
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
            disabled={!breeds.length}
            className={[s.formItem, "disabled:opacity-50"].join(" ")}
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
            className={s.formItem}
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

        <button style={{ backgroundColor: theme }} className={s.button}>
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
