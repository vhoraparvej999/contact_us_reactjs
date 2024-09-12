import styles from "./Navigation.module.css";
import imagePublic from "../../assets/02.jpg"; // Proper import path for src folder images

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} ${styles.container}`}>
      <div>
        <img src={imagePublic} alt="Navigation Logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
