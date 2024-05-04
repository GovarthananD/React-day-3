import "./App.css";
import React from "react";
import Container from "@mui/material/Container";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="App">
        <div className="card">
          <div className="div-img">
            <img
              src="data:image/png;base64,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"
              alt="pic"
              className="image"
            />
          </div>
          <div className="headers">
            <h4>Sign up on Start Bootstrap</h4>
            <p>
              Join our community of designers and developers and manage your
              purchases, favorite themes and snippets, comments, and more!
            </p>
          </div>
          <div className="buttons">
            <button className="twitter">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png"
                alt="pic"
                className="twitter-logos"
              />{" "}
              <a href="https://twitter.com/?lang=en">Log in with Twitter</a>
            </button>
            <button className="facebook">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_640.png"
                alt="pic"
                className="facebook-logos"
              />
              <a href="https://www.facebook.com/">Log in with facebook</a>
            </button>
            <button className="google">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png"
                alt="pic"
                className="google-logos"
              />
              <a href="https://support.google.com/mail/answer/56256?hl=en">
                Log in with Google
              </a>
            </button>
            <button className="git">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
                alt="pic"
                className="git-logos"
              />
              <a href="https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github">
                Log in with GitHub
              </a>
            </button>
          </div>
          <br />
          <hr />
          <p className="or">...or enter your information below.</p>
          <div className="regi">
            <div className="names">
              <p>
                First name <br />
                <input type="text" />
              </p>
              <p>
                Last name
                <br />
                <input type="text" />
              </p>
            </div>
            Email Address
            <br />
            <input className="two-input" type="text" />
            <div className="pass">
              <p>
                Password
                <br />
                <input type="text" />
              </p>
              <p>
                confirm password
                <br />
                <input type="text" />
              </p>
              <br />
            </div>
            <div className="regi-2">
              <p>
                <Checkbox /> I accept the terms & conditions
              </p>
              <p>
                <button>Register</button>
              </p>
            </div>
          </div>
          <div className="end">
            <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <span> Privacy Policy </span> and <span> Terms of Service </span>{" "}
              apply.
            </p>
            <hr />
            <p onClick={() => navigate("/")}>
              Have an account? <span> Sign in! </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Register;
