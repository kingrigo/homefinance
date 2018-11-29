import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import './Dashboard.css';
class Dashboard extends Component {
    render() {
        return (
        <div className="row box">
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="box-part text-center bounceInLeft animated">
          <i className="fas fa-hand-holding-usd fa-3x"></i>

           <div className="title">
            <h4>Mis Ingresos</h4>
           </div>

           <div className="text">
             <span>Una interfaz donde podrás controlar todos tus ingresos, de una manera fácil y rapida.</span>
           </div>
            
           <NavLink to="/ingresos" className="card-notify btn"><i className="fas fa-arrow-right"></i></NavLink>
          </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="box-part text-center bounceInDown animated">
           <i className="fas fa-money-bill-wave fa-3x"></i>

           <div className="title">
            <h4>Fondos</h4>
           </div>

           <div className="text">
             <span>Aquí podrás ver cuanto dinero tienes guardado en el banco, en plazo fijos, o adentro del colchón.</span>
           </div>
            
           <NavLink to="/fondos" className="card-notify btn"><i className="fas fa-arrow-right"></i></NavLink>
          </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="box-part text-center bounceInRight animated">
           <i className="fas fa-balance-scale fa-3x"></i>

           <div className="title">
            <h4>Gastos</h4>
           </div>

           <div className="text">
             <span>Un registro detallado de todos tus gastos, tanto en impuestos, como en necesidades personales u oceo.</span>
           </div>
            
           <NavLink to="/gastos" className="card-notify btn"><i className="fas fa-arrow-right"></i></NavLink>
          </div>
         </div>
        </div>
        )
    }
}
export default Dashboard;