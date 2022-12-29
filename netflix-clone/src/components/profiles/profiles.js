import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profiles.css";

const Profiles = () => {
  const [profiles] = useState([
    { name: "John", picture: "profile1.jpg" },
    { name: "Roger", picture: "profile2.jpg" },
    { name: "David", picture: "profile3.png" },
    { name: "Mia", picture: "profile4.jpg" },
  ]);

  let navigate = useNavigate();

  const pushTo = () => {
    navigate("/home");
  };

  return (
    <div className="profiles-container">
      <div className="profiles-heading">
        <p>Who's watching?</p>
      </div>
      <div className="profiles-list">
        {profiles.map((prof) => {
          return (
            <div>
              <img
                className="profiles-image"
                src={require(`../../assets/images/${prof.picture}`)}
                alt="logo"
                onClick={pushTo}
              />
              <a className="profiles-name">{prof.name}</a>
            </div>
          );
        })}
      </div>
      <div className="profiles-manage">Manage Profiles</div>
    </div>
  );
};

export default Profiles;
