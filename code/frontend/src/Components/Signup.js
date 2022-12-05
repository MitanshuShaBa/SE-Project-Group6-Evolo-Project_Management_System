import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  return (
    <div>
      <header id="header" class="header">
        <div class="form-content-sign">
          <div class="container">
            <div class="row">
              <div class="col-md-6 login-left">
                <h2> Sign up </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    fetch("http://localhost:5000/auth/signup", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ name, email, password, phoneNum }),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.error) {
                          alert(data.error);
                          return;
                        }
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("user", data.user);
                        navigate("/dashboard");
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  <div class="form-group">
                    <label>Name</label>

                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      name="name"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label>Email-id</label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      name="email"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      name="password"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label>Contact number</label>
                    <input
                      onChange={(e) => {
                        setPhoneNum(e.target.value);
                      }}
                      type="tel"
                      name="contact"
                      class="form-control"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary form-btn">
                    Register
                  </button>
                  <p class="alter">
                    Already have an account, <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
              <Header />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Signup;
