import React, { Component } from "react";
import {Jumbotron, Button} from "reactstrap"
import './Home.css'
class Home extends Component {
    render() {
        return (
        <div className="home">
            <Jumbotron fluid className="text-center jumbo">
            <i className="fas fa-home fa-7x">$</i>
            <h1 className="display-3">¡Bienvenido a homeFinance!</h1>
            <p className="lead"><i>El lugar donde podrás organizar tus financias sin tener conocimiento alguno.</i></p>
            <hr className="my-2" />
            <p>Crea una cuenta <b>gratis</b> y empeza a gestionarte!</p>
            <p className="lead">
            </p>
            </Jumbotron>
        </div>
        )
    }
}
export default Home;