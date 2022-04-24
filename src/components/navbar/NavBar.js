import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Noodles</span>
        <Link to="/route">Home</Link>
      </div>
    </nav>
  );
}
