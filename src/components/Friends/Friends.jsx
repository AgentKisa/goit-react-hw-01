import React from "react";
import clsx from "clsx";
import s from "./Friends.module.css";

function Friends({ friends }) {
  return (
    <div className={s.friendsContainer}>
      {friends.map((friend) => {
        return (
          <div key={friend.id} className={s.friendCard}>
            <img src={friend.avatar} alt="Avatar" className={s.avatar} />
            <p className={s.name}>{friend.name}</p>
            <p
              className={clsx(s.status, friend.isOnline ? s.online : s.offline)}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Friends;
