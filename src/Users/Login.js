import React, {Component} from "react";
import './login.css';
class Login extends Component{
    render(){
        return (
        <div className="row">
            <div className="cardLogin loginCard-container">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo electronico" required autofocus />
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Recordarme
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="#" className="forgot-password">
                Crear cuenta nueva
            </a>
            <hr></hr>
            <a href="#" className="forgot-password">
                Recuperar contraseña
            </a>
            </div>
        </div>
        )
    }
}
export default Login;