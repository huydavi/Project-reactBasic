import axios from "../utils/axioscustomine";

const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userID) => {
  return axios.delete("api/v1/participant", { data: { id: userID } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(
    `http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`
  );
};

const postLogin = (userEmail, userPassword) => {
  return axios.post(`http://localhost:8081/api/v1/login`, {
    email: userEmail,
    password: userPassword,
    delay: 5000,
  });
};

const postRegister = (email, password, username) => {
  return axios.post(`http://localhost:8081/api/v1/register`, {
    email,
    password,
    username,
  });
};

const getQuizByUser = () => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIxODI0NzI0LCJleHAiOjE3NTMzNjA3MjR9.9CgvzPLgLw8KbPlKKji6ZvIHLZZyC3rlF8lPWhmCM-w";
  return axios.get("http://localhost:8081/api/v1/quiz-by-participant", {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const getDataQuiz = (id) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIxODI0NzI0LCJleHAiOjE3NTMzNjA3MjR9.9CgvzPLgLw8KbPlKKji6ZvIHLZZyC3rlF8lPWhmCM-w";
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
};
