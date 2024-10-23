import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const Homepage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          You don't want to make a boring form. Maybe it's time to give a try
          us...
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Get started-it's free
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>Doing Quiz now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
