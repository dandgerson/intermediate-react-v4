import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  // this enables redux devtools
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
