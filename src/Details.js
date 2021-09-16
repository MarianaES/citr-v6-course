import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  // constructor() {
  //   super();

  //   this.state = { loading: true };
  // }
  // After npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4
  state = { loading: true };
  // Class components have something called life cycle methods
  //  Called when react component is render for the 1st time
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading... </h1>;
    }
    const { animal, breed, city, state, description, name } = this.state;
    // console.log(this.state);
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const Details = () => {
//   return <h2>hi LOL OMG WTF!</h2>;
// };

export default withRouter(Details);
