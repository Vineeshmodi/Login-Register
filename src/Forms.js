import React from "react";
import Register from "./Register";
import Login from "./Login";

const Forms = () => {
  const [form, setform] = React.useState({
    register: true,
    login: false,
    text: "Login",
  });
  const [fromstate, setformstatus] = React.useState(false);
  const updateform = () => {
    setform({
      register: !form.register,
      login: !form.login,
      text: form.text === "Login" ? "Register" : "Login",
    });
    setformstatus(true);
  };
  return (
    <div className="row">
      <div className="left"></div>
      <div className="right">
        {form.register ? (
          <Register form={form} updateform={updateform} fromstate={fromstate} />
        ) : (
          <Login form={form} updateform={updateform} fromstate={fromstate} />
        )}
      </div>
    </div>
  );
};

export default Forms;
