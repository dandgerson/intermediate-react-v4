import { StrictMode } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { ThemeContextProvider } from "./ThemeContext";

const App = () => {
  return (
    <StrictMode>
      <ThemeContextProvider value={"darkblue"}>
        <header>
          <Link to={"/"}>Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </ThemeContextProvider>
    </StrictMode>
  );
};

export default App;
