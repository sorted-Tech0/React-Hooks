import React from "react";
import { UserContext } from "../App";

function ComponentE() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>User Context value {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentE;
