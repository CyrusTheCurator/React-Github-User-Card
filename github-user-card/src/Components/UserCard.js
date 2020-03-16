import React from "react";
import "./UserCard.css";

const UserCard = function(props) {
  return (
    <div className="cardContainer">
      Your username is:{" "}
      <p className="username">{props.infoObj ? props.infoObj.login : "..."}</p>
      <div>
        Your followers are:{" "}
        {props.followers ? (
          props.followers.map(user => {
            return (
              <div className="username" key={user.id}>
                {user.login}
              </div>
            );
          })
        ) : (
          <div className="username">...</div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
