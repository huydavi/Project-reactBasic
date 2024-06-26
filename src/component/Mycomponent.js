import React from "react";
import Myinfo from "./Myinfo";
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "huy", age: 16 },
      { id: 2, name: "dh", age: 18 },
      { id: 3, name: "a huy", age: 24 },
    ],
  };
  render() {
    return (
      <div>
        <Myinfo />
        <br></br>
        <br></br>
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default Mycomponent;
