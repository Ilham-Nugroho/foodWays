import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="text-center">
      <div className="form-signin">
        <form>
          <h1 className="register-h1">Register</h1>

          <input
            type="email"
            id="registerEmail"
            className="form-control register-input"
            placeholder="Email Address"
            required
            autofocus
          />
          <input
            type="password"
            id="registerPassword"
            className="form-control register-input"
            placeholder="Password"
            required
          />
          <input
            type="text"
            id="registerFullName"
            className="form-control register-input"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            id="registerGender"
            className="form-control register-input"
            placeholder="Gender"
            required
          />
          <input
            type="text"
            id="registerPhone"
            className="form-control register-input"
            placeholder="Phone Number"
            required
          />
          <select className="form-control register-input" required>
            <option value="user"> As User</option>
            <option value="merchant"> As Merchant</option>
          </select>

          <button className=" btn btn-lg login-btn" type="submit">
            Register
          </button>

          <div className="mt-3">
            <label>
              {" "}
              Already have an account? Click
              <Link to="/login"> Here</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
