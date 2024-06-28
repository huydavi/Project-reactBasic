import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class Mycomponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "huy", age: 16 },
//       { id: 2, name: "dh", age: 18 },
//       { id: 3, name: "a huy", age: 24 },
//     ],
//   };

//   handleAddUserInfo = (userObj) => {
//     this.setState({
//       listUsers: [...this.state.listUsers, userObj],
//     });
//   };

//   handleDelelteUser = (userId) => {
//     let listUsersClones = this.state.listUsers;
//     listUsersClones = listUsersClones.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClones,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {/* <img src={Logo} /> */}
//         <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
//         <br></br>
//         <br></br>
//         <DisplayInfo
//           listUsers={this.state.listUsers}
//           handleDelelteUser={this.handleDelelteUser}
//         />
//       </div>
//     );
//   }
// }

const Mycomponent = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "huy", age: 16 },
    { id: 2, name: "dh", age: 18 },
    { id: 3, name: "a huy", age: 24 },
  ]);

  const handleAddUserInfo = (userObj) => {
    setListUser([...listUsers, userObj]);
  };

  const handleDelelteUser = (userId) => {
    let listUsersClones = [...listUsers];
    listUsersClones = listUsersClones.filter((item) => item.id !== userId);
    setListUser(listUsersClones);
  };

  return (
    <div>
      {/* <img src={Logo} /> */}
      <AddUserInfo handleAddUserInfo={handleAddUserInfo} />
      <br></br>
      <br></br>
      <DisplayInfo
        listUsers={listUsers}
        handleDelelteUser={handleDelelteUser}
      />
    </div>
  );
};

export default Mycomponent;
