import styles from "../styles/Layouts.module.css";
import Nav from "./Nav";
const Layouts = (props) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello</h1>
          {props.children}
        </main>
      </div>
    </>
  );
};
export default Layouts;
