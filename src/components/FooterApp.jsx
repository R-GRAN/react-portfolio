import { Link } from "react-router-dom";

function FooterApp() {
  return (
    <footer className="footer-style">
      <p>© 2024 - Rémy GRANGENOIS</p>
      <Link to={"/login"}>Login</Link>
    </footer>
  );
}

export default FooterApp;
