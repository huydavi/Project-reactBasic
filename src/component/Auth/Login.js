import { useState } from "react";
import "./Login.scss";
import { postLogin } from "../../service/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    //validate
    const isvalidateEmail = validateEmail(email);

    if (!isvalidateEmail) {
      toast.error("Invalid Email");
      return;
    }

    if (!password) {
      toast.error("Please type password");
      return;
    }
    //submit login
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="title col-4 mx-auto">HoiDanIT</div>
      <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <lable>Email</lable>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type={"email"}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <lable>Pasword</lable>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type={"password"}
            className="form-control"
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button onClick={() => handleLogin()} className="btn-submit">
            Login to HoiDanIT
          </button>
        </div>
        <div
          className="text-center back"
          onClick={() => {
            navigate("/");
          }}
        >
          &#60;&#60; Go to Homepage
        </div>
      </div>
    </div>
  );
};

export default Login;
