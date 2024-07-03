import ModalCreatNewUsers from "./ModalCreatNewUsers";
import "./ManageUsers.scss";

const ManageUser = () => {
  return (
    <div>
      <div classNameName="manager-users-container">
        <div classNameName="title">Manage User</div>
        <div classNameName="users-content">
          <div>
            <button>Add new user</button>
          </div>
          <div>table user</div>
        </div>

        <ModalCreatNewUsers></ModalCreatNewUsers>
      </div>
    </div>
  );
};

export default ManageUser;
