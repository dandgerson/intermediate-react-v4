import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import store from "./store";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Link to={"/"}>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
