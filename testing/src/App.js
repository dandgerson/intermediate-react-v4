import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { ThemeContextProvider } from "./ThemeContext";

const App = () => {
  return (
    <StrictMode>
      <ThemeContextProvider value={"darkblue"}>
        <BrowserRouter>
          <header>
            <Link to={"/"}>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
