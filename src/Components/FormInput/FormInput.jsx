import React from "react";

import "./FormInput.css";

const FormInput = () => {
  return (
    <div className="form-wrapper">
      <p className="form-desc">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="input-wrapper" action="">
        <input type="email" placeholder="Email address" />
        <button className="btn btn-subscribe ">Get Started </button>
      </form>
    </div>
  );
};

export default FormInput;
