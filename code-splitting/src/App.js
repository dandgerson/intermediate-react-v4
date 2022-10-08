import { lazy, StrictMode, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<h2>Loading, be patient you weirdo</h2>}>
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
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
