import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

const localCach: {
  [index: string]: string[];
} = {};

type Status = "unloading" | "loading" | "loaded";

const useBreedList = (animal: Animal): [string[], Status] => {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCach[animal]?.length) {
      setBreedList(localCach[animal]);
    } else {
      void requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = (await res.json()) as BreedListAPIResponse;
      localCach[animal] = json.breeds || [];
      setBreedList(localCach[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
