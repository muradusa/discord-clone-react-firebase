import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import "./Message.css";
import { useSelector, useDispatch } from "react-redux";

function Message({ message, timestamp, user }) {
  return (
    <div className="message">
      <div className="message__avatar">
        <Avatar src={user.photo} />
      </div>
      <div className="message__body">
        <div className="message__user">
          <p>{user.displayName}</p>
          <small>{new Date(timestamp?.toDate()).toUTCString()}</small>
        </div>
        <div className="message__chat">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
