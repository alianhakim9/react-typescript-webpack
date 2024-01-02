import "./assets/css/index.css";
import Logo from "./assets/images/logo.svg";

export const App = () => {
  return (
    <div className="app">
      <img src={Logo} alt="" className="app-logo" />
      <h1 className="heading">React Webpack Typescript</h1>
      <p>
        <small>
          The starter code for building web app using react with webpack and
          typescript under MIT License
        </small>
      </p>
    </div>
  );
};
