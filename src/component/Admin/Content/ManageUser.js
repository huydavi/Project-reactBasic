import ModalCreatNewUsers from "./ModalCreatNewUsers";
import "./ManageUsers.scss";
import TableUsers from "./TableUsers";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../service/apiService";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
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
        <div>
          <TableUsers listUsers={listUsers} />
        </div>
        <ModalCreatNewUsers
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
