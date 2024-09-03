import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from './gib1.png';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/studentproject/students/saveStudent", {
        name: name,
        email: email,
        password: password,
      });
      alert("Student Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container mt-4">
        <div class="card">
          <h1> Registration</h1>

          <form autoComplete="false">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="d-grid">
              <button type="submit" class="btn btn-success mt-2" onClick={save}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
