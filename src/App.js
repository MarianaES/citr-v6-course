// import React from "react"; Not needed anymore, Babel is smart enogh to identify JSXs
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet
        name="Koly (Gorda preciosa)"
        animal="Dog"
        breed="Beagle/Australian Cattle"
      />
      <Pet name="Agaporni" animal="Bird" breed="Agaporni" />
      <Pet name="Beethoven" animal="Dog" breed="St. Bernard" /> */}
      <SearchParams />
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
ReactDOM.render(<App />, document.getElementById("root"));
