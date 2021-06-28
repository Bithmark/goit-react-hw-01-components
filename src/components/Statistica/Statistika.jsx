import React from "react";
import css from "./Statistika.module.css";
import PropTypes from "prop-types";

function randColor() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.div}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statlist}>
          {stats.map((stat) => (
            <li
              className={css.item}
              style={{ backgroundColor: randColor() }}
              key={stat.id}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
