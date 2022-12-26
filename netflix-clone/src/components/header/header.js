import logo from "../.././logo.svg";
import "./header.css";
import "../../App.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>Hello world!</p>
      </header>
    </div>
  );
};

export default Header;
