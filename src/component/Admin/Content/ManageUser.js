import ModalCreatNewUsers from "./ModalCreatNewUsers";
import "./ManageUsers.scss";
import { useState } from "react";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manager-users-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            Add new user
          </button>
        </div>
        <div>table user</div>
        <ModalCreatNewUsers
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
