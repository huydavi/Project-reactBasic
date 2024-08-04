import "./App.scss";
import Header from "./component/Header/Header";
import { Outlet, Link } from "react-router-dom";
import PerfetchScrollbar from "react-perfect-scrollbar";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
      </div>
      <div className="app-content">
        <PerfetchScrollbar>
          <Outlet></Outlet>
        </PerfetchScrollbar>
      </div>
    </div>
  );
};

export default App;
