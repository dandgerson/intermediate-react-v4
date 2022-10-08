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
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
            minHeight: "100vh",
          }}
        >
          <BrowserRouter>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-400 to-red-500">
              <Link
                to={"/"}
                className="text-6xl text-white hover:text-gray-200 transition-colors"
              >
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContextProvider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
