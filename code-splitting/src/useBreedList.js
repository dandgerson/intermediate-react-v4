import { useState, useEffect } from "react";

const localCach = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCach[animal]?.length) {
      setBreedList(localCach[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCach[animal] = json.breeds || [];
      setBreedList(localCach[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
