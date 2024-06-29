import React from "react";
import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.profileInfo}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.statItem}>
          <span className={s.label}>Followers</span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Views</span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Likes</span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
