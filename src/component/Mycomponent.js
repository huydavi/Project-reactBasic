import React from "react";

class Mycomponent extends React.Component {
  state = {
    name: "Huy",
    age: 24,
    address: "HCM",
  };

  handleClick(event) {
    console.log("Click Button");
    this.setState({
      name: "Đức Huy",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleMouseOver(event) {
    // console.log(event);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and i am {this.state.age} year old. Im live
        in {this.state.address} city
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
        <button onMouseOver={this.handleMouseOver}>Hover me!</button>
      </div>
    );
  }
}

export default Mycomponent;
