import React, { useState } from "react";
import useFormValidation from './useFormValidation';
import validationLogin from './validateLogin';

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

function Login(props) {
  const {  handleSubmit, handleBlur, handleChange, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validationLogin);
  const [login, setLogin] = useState(true);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit ={handleSubmit}className="flex flex-column">
        {!login && 
          <input
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="off"
          />}
        <input
          onChange={handleChange}
          onBlur={handleBlur} 
          value={values.email}
          name="email"
          type="email"
          className={errors.email && 'error-input'}
          placeholder="Your email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name="password"
          type="password"
          className={errors.email && 'error-input'}
          placeholder="Choose a secure password"
          autoComplete="off"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2" 
            disabled={isSubmitting}
            style={{background: isSubmitting ? "grey": "orange"}}
          >
            Submit
          </button>
          <button 
            onClick={() => setLogin(prevLogin => !prevLogin)}
            type="button" className="button pointer"
          >
            {login ? "need to create an account" : "Already have an account"}
          </button>
        </div>
      </form>
    </div>
    );
}

export default Login;
