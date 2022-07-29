import React from "react";

const Login = (props) => {
  const { text } = props.form;
  const updateform = () => {
    props.updateform();
  };
  return (
    <div className="form">
      <form className={props.fromstate ? "myform" : ""}>
        <div className="group">
          <label html for="email">
            Email
          </label>
          <input
            type="email"
            className="control"
            id="email"
            placeholder="email"
          />
        </div>
        <div className="group">
          <label html for="passward">
            Passward
          </label>
          <input
            type="passward"
            className="control"
            id="passward"
            placeholder="passward"
          />
        </div>
        <div className="group">
          <input type="submit" className="btn" value="Login" />
        </div>
        <div className="group">
          <span className="link" onClick={updateform}>
            {text}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
