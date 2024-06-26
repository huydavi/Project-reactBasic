import React from "react";

class Myinfo extends React.Component {
  state = {
    name: "Huy",
    age: 24,
    address: "HCM",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i am {this.state.age} year old. Im live
        in {this.state.address} city
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Name: </label>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Age: </label>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Myinfo;
