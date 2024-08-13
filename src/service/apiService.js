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

const postSubmitQuiz = (data) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyMjMxMTA2LCJleHAiOjE3NTM3NjcxMDZ9.taOzqLHH4q6LLyE6QmY2_Mbibvv5SHx2i3EbGYloKWI";
  return axios.post(
    "/api/v1/quiz-submit",
    { ...data },
    {
      headers: { Authorization: `Bearer ${tokenStr}` },
    }
  );
};

const postCreateNewQuiz = (description, name, difficulty, image) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyMjMxMTA2LCJleHAiOjE3NTM3NjcxMDZ9.taOzqLHH4q6LLyE6QmY2_Mbibvv5SHx2i3EbGYloKWI";
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.post("/api/v1/quiz", data, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const getAllQuizForAdmin = () => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyMzI0MzgxLCJleHAiOjE3NTM4NjAzODF9.N2KNFujTNczWAk-l23oQqdosNFtrnpvU3FgpzYwRz74";
  return axios.get("http://localhost:8081/api/v1/quiz/all", {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const putUpdateQuizForAdmin = (id, name, description, difficulty, image) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyMzI5ODM2LCJleHAiOjE3NTM4NjU4MzZ9.crFXOysVzbMs-FOxC57isRjhU_79nGuWY0lCkKtO-Ps";
  const data = new FormData();
  data.append("id", id);
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.put("api/v1/quiz", data, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const deleteQuizForAdmin = (id) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyMzI5ODM2LCJleHAiOjE3NTM4NjU4MzZ9.crFXOysVzbMs-FOxC57isRjhU_79nGuWY0lCkKtO-Ps";
  return axios.delete(`/api/v1/quiz/${id}`, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const postCreatNewQuestionForQuiz = (quiz_id, description, questionImage) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyNjk3ODM5LCJleHAiOjE3NTQyMzM4Mzl9.LjfgejLy5RBRzXHVosictGGEZyRW83fe4c2bPkZmVc4";
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", questionImage);
  return axios.post("api/v1/question", data, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const postCreatNewAnswerForQuestion = (
  description,
  correct_answer,
  question_id
) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyNjk3ODM5LCJleHAiOjE3NTQyMzM4Mzl9.LjfgejLy5RBRzXHVosictGGEZyRW83fe4c2bPkZmVc4";
  return axios.post(
    "api/v1/answer",
    { description, correct_answer, question_id },
    {
      headers: { Authorization: `Bearer ${tokenStr}` },
    }
  );
};

const postAssignQuiz = (quizId, userId) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyNzkzOTQ5LCJleHAiOjE3NTQzMjk5NDl9.DcgXn0cXTUAqxSK8SxW9aBYTjICw62bLep2WhDxwLLY";
  return axios.post(
    "api/v1/quiz-assign-to-user",
    { quizId, userId },
    {
      headers: { Authorization: `Bearer ${tokenStr}` },
    }
  );
};

const getQuizWithQA = (quizId) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIyNzkzOTQ5LCJleHAiOjE3NTQzMjk5NDl9.DcgXn0cXTUAqxSK8SxW9aBYTjICw62bLep2WhDxwLLY";
  return axios.get(`http://localhost:8081/api/v1/quiz-with-qa/${quizId}`, {
    headers: { Authorization: `Bearer ${tokenStr}` },
  });
};

const postUpsertQA = (data) => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIzMDExMDU5LCJleHAiOjE3NTQ1NDcwNTl9.ectB91UD9JHbpOaNJlHfLzm9qjihwoZf0sXP5XRqTY0";
  return axios.post(
    `/api/v1/quiz-upsert-qa`,
    { ...data },
    {
      headers: { Authorization: `Bearer ${tokenStr}` },
    }
  );
};

const LogOut = (email, refresh_token) => {
  return axios.post("/api/v1/logout", { email, refresh_token });
};

const getOverview = () => {
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiaWF0IjoxNzIzNTUzNzY2LCJleHAiOjE3NTUwODk3NjZ9.x1LgbxDvmgR-2dgi_3CLBH9kyAjadTJbHeIlp27VRDY";
  return axios.get("api/v1/overview", {
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
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  putUpdateQuizForAdmin,
  deleteQuizForAdmin,
  postCreatNewQuestionForQuiz,
  postCreatNewAnswerForQuestion,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
  LogOut,
  getOverview,
};
