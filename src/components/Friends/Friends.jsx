import React from "react";
import clsx from "clsx";
import s from "./Friends.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

function Friends({ friends }) {
  return (
    <ul className={s.friendsContainer}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={s.friendListItem} key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Friends;
