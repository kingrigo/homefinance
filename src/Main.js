import React, { Component } from "react";
import {Route, HashRouter} from "react-router-dom";
import {NavLink as RRNavLink} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Register from './Users/Register';
import Login from './Users/Login';
import Ingresos from './Ingresos/Ingresos';
import Gastos from './Gastos/Gastos';
import Fondos from './Fondos/Fondos';
import NewIngreso from './Ingresos/NewIngreso';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import Contact from './Contact';
class Main extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><i className="fas fa-home fa-2x">$</i></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/dashboard" tag={RRNavLink}>Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" tag={RRNavLink}>Ingresar</NavLink>
                        </NavItem> 
                        </Nav>
                    </Collapse>
                    </Navbar>
                    <div className="container-fluid content">
                        <Route exact path="/" component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route exact path="/ingresos" component={Ingresos} />
                        <Route path="/fondos" component={Fondos} />
                        <Route path="/gastos" component={Gastos} />
                        <Route path="/ingresos/new" component={NewIngreso} />
                    </div>
                </div>

            </HashRouter>
        )
    }
}
export default Main;