import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="/images/icon.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
