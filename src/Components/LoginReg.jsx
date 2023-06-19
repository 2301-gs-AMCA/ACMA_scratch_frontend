import { useState } from "react";
export default function LoginReg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <form>
        <div className="login-form">
          <h2 className="login-header">Login</h2>
          <br></br>
          <label name="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <label className="password">Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
