import React from "react";
import styles from './Home.module.css'

function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url(/public/images/Home.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        opacity: "8%",
      }}
    >
    <h1>Welcome</h1>
    </div>
  );
}

export default Home;
