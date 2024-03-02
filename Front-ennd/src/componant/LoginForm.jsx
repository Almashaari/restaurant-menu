import React from "react";

function LoginForm() {

  

  return (
<div className="containerStyle">
      <div className="col-md-10 mx-auto col-lg-5 col-sm-10">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-dark btn-primary" type="submit">Login</button>
          <hr className="my-4" />
          <small className="text-body-secondary">By clicking Sign up.</small>
        </form>
      </div>
      </div>
  );
}

export default LoginForm;

/*
1- fix the background img.
2- fix the form on small screens.
*/