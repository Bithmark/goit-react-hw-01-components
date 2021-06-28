import React from "react";
import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="Аватар пользователя" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.label}>Followers</span>
          <span className={css.followers}>{stats.followers}|</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Views</span>
          <span className={css.views}>{stats.views}|</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Likes</span>
          <span className={css.likes}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
