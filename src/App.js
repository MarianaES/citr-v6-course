import { StrictMode } from "react";
// import React from "react"; Not needed anymore, Babel is smart enogh to identify JSXs
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        {/* React Router will render all components that the path match. That's why we use Switch */}
        <Switch>
          <Route path="/details/:id">
            <Details />
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
