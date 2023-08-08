import styles from "/src/components/PageNotFound.module.css"

function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

export default PageNotFound;
