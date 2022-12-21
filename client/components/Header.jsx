import styles from "../styles/Home.module.css";

const Header = (props) => {
  return (<>
    <h2 className={`${styles.jumbotron} jumbotron text-center text-white`}>
      {props.name}
    </h2>
    </>
  );
};

export default Header ;