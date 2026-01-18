
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#000", color: "#fff" }}>
      <Link to="/">Shop</Link> | <Link to="/admin">Admin</Link>
    </nav>
  );
}
