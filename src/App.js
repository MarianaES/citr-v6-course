const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Koly",
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
