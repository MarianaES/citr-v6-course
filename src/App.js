import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
