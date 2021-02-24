import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Reproducir</Link>
          </li>
          <li>
            <Link to="/compartir">Compartir</Link>
          </li>
        </ul>
      </nav>
    );
}
