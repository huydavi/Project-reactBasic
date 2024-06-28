import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     age: "",
//     address: "HCM",
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddUserInfo({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
// <div>
//   My name is {this.state.name} and i am {this.state.age} year old. Im live
//   in {this.state.address} city
//   <form onSubmit={(event) => this.handleOnSubmit(event)}>
//     <label>Your Name: </label>
//     <input
//       type="text"
//       onChange={(event) => this.handleOnChangeName(event)}
//     />
//     <button>Submit</button>
//   </form>
//   <form onSubmit={(event) => this.handleOnSubmit(event)}>
//     <label>Your Age: </label>
//     <input
//       type="text"
//       onChange={(event) => this.handleOnChangeAge(event)}
//     />
//     <button>Submit</button>
//   </form>
// </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddUserInfo({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and i am {age} year old.
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Name: </label>
        <input type="text" onChange={(event) => handleOnChangeName(event)} />
        <button>Submit</button>
      </form>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Age: </label>
        <input type="text" onChange={(event) => handleOnChangeAge(event)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
