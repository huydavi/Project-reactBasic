import React, { useEffect, useState } from "react";
import AddUserInfo from "./AddUserInfo";
import "./DisplayInfo.scss";
import Logo from "./../logo.svg";

// class DisplayInfo extends React.Component {
//   state = {
//     isShowListUser: true,
//   };
//   handleHideShow = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };
//   render() {
//     const { listUsers } = this.props;
//     return (
//       <div className="displayinfor-container">
//         {/* <img src={Logo} /> */}
//         <div>
//           <button
//             onClick={(event) => {
//               this.handleHideShow(event);
//             }}
//           >
//             {this.state.isShowListUser === true
//               ? "Hide list users"
//               : "Show list users"}
//           </button>
//         </div>
//         {this.state.isShowListUser && (
//           <>
//             {listUsers.map((item) => {
//               return (
//                 <div
//                   key={item.id}
//                   className={+item.age >= 18 ? "green" : "red"}
//                 >
//                   <div>My name is {item.name}</div>
//                   <div>Im {item.age} year old</div>
//                   <button onClick={() => this.props.handleDelelteUser(item.id)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  const [isShowHideListUsers, setIsShowHideListUsers] = useState(true);
  const handleShowHideListUser = () => {
    setIsShowHideListUsers(!isShowHideListUsers);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   document.title = "Huy and ĐH";
    // }, 3000);
    if (listUsers.length === 0) {
      alert("you deleted all user");
    }
  }, [listUsers]);

  return (
    <div className="displayinfor-container">
      {/* <img src={Logo} /> */}
      <div>
        <button onClick={() => handleShowHideListUser()}>
          {isShowHideListUsers === true ? "Hide list user" : "Show list user"}
        </button>
      </div>
      {isShowHideListUsers && (
        <>
          {listUsers.map((item) => {
            return (
              <div key={item.id} className={+item.age >= 18 ? "green" : "red"}>
                <div>My name is {item.name}</div>
                <div>Im {item.age} year old</div>
                <button onClick={() => props.handleDelelteUser(item.id)}>
                  Delete
                </button>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
