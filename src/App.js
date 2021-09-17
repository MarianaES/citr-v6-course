import { StrictMode, useState } from "react";
// import React from "react"; Not needed anymore, Babel is smart enogh to identify JSXs
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("pink");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          {/* React Router will render all components that the path match. That's why we use Switch */}
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
        {/* <Pet
        name="Koly (Gorda preciosa)"
        animal="Dog"
        breed="Beagle/Australian Cattle"
      />
      <Pet name="Agaporni" animal="Bird" breed="Agaporni" />
      <Pet name="Beethoven" animal="Dog" breed="St. Bernard" /> */}
      </div>
    </ThemeContext.Provider>
  );
};

/* Output after Babel and Parcel 
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Koly (Gorda preciosa)",
      animal: "Dog",
      breed: "Beagle/Australian Cattle",
    }),
    React.createElement(Pet, {
      name: "Agaporni",
      animal: "Bird",
      breed: "Agaporni",
    }),
    React.createElement(Pet, {
      name: "Beethoven",
      animal: "Dog",
      breed: "St. Bernard",
    }),
  ]);
};
*/

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(
  // Keep in line and not using legacy features or things that will be soon depracated
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
