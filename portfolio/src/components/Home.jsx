import React from "react";
import styles from "./Home.module.css";
import Button from "./Button";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Button item="About" />
          <Button item="Skills" />
          <Button item="Experience" />
          <Button />
          <Button item="Projects" />
          <Button item="Contact" />
        </div>
      </div>
    </>
  );
}

export default Home;

{
  /* <div
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
</div> */
}
