import { useNavigate } from "react-router";
import "../App.css";

export default function Navbar() {
  const nav = useNavigate();

  return (
    <div className="navbar">
      <h1>A More Comfortable Area</h1>
      <ul className="navlinks">
        <li>
          <button className="link" onClick={() => nav("/")}>
            Home
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Register")}>
            Login/Register
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Profile")}>
            Profile
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/CreatePost")}>
            Shop
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Login")}>
            Cart
          </button>
        </li>
      </ul>
    </div>
  );
}
