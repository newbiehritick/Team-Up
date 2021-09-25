import React from "react";

import styles from "./Card.module.scss";

function Card({ className, children }) {
  return (
    <div className={`${styles.card} ${styles[className]}`}>{children}</div>
  );
}

export default Card;
