import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
  const userInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  function login(){
    if(userInputRef.current.value === "admin" && passwordInputRef.current.value === "admin"){
      navigate('/home');
    }
  }

return (
<div className="container">
    <div className="logo">Login</div>
    <div className="login-item">
      <form action="" method="post" className="form form-login">
        <div className="form-field">
          <label className="user" ><span className="hidden">Username</span></label>
          <input ref={userInputRef} id="login-username" type="text" className="form-input" placeholder="Username" required/>
        </div>

        <div className="form-field">
          <label className="lock"><span className="hidden">Password</span></label>
          <input ref={passwordInputRef} id="login-password" type="password" className="form-input" placeholder="Password" required/>
        </div>

        <div className="form-field">
          <input type="button" value="Log in" onClick={() => login()}/>
        </div>
      </form>
    </div>
</div>
  );
}

export default Login;
