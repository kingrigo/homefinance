import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import '../animate.css';
class Fondos extends Component {
    render() {
        return (
        <div className="row box bounceInDown animated">
         <div className="col-lg-4 col-md-4 col-sm-4 offset-lg-2 offset-md-2 col-sm-2 col-xs-12">
          <div className="box-part text-center">
          <i className="fas fa-piggy-bank fa-7x"></i>
           <div className="title">
            <h4>Efectivo</h4>
           </div>

           <div className="text">
             <span>Se tiene <b>$15000</b> guardados en efectivo al día de <b>30/11/2018</b></span>
           </div>
            
          </div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="box-part text-center">
           <i className="fas fa-university fa-7x"></i>

           <div className="title">
            <h4>En Banco</h4>
           </div>

           <div className="text">
             <span>Se tiene <b>$15000</b> guardados en efectivo al día de <b>30/11/2018</b></span>
           </div>
            
          </div>
         </div>
        </div>
        )
    }
}

export default Fondos;