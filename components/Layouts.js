import styles from "../styles/Layouts.module.css";
import Header from './Header'
import Nav from "./Nav";
const Layouts = (props) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {props.children}
        </main>
      </div>
    </>
  );
};
export default Layouts;
