import React from "react";
import AddUserInfo from "./AddUserInfo";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleHideShow = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div className="displayinfor-container">
        <div>
          <button
            onClick={(event) => {
              this.handleHideShow(event);
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </button>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((item) => {
              return (
                <div
                  key={item.id}
                  className={+item.age >= 18 ? "green" : "red"}
                >
                  <div>My name is {item.name}</div>
                  <div>Im {item.age} year old</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
