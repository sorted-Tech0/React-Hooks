import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  // NOTE:- Every context returns the context value so we have stored in the variable

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
