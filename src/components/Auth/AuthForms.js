import { Fragment } from "react";
import {  useState } from "react/cjs/react.development";
import classes from "./AuthForms.module.css";
import RegisterForm from "./RegisterForm";

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);


  const backGround =
    "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80";

  const switchFormsHandler = () => {
    setIsLogin((oldData) => !oldData);
  };

  return (
    <Fragment>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>Log In</h1>
                <span className="subheading">Welcome Back!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto content">
            {!isLogin && <RegisterForm />}
            <button
              type="button"
              className={classes.swithButton}
              onClick={switchFormsHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthForms;
