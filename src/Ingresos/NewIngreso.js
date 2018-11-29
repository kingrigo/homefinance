import React, {Component} from 'react';
import './style.css'
class NewIngreso extends Component {
    constructor(props){
        super(props);
        this.state = {
            estado: '',
            monto: 0,
            fuente: '',
            frecuencia: '',
            guardado: ''
        }
    }
    render(){
        return(
            <div className="container">
                <form>
                <h3 className="text-center">Agregar nuevo ingreso</h3>
                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Fuente</label>
                    <div className="col-10">
                        <input className="form-control" type="text" id="input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Monto</label>
                    <div className="col-10">
                        <input className="form-control" type="text" id="input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Frecuencia</label>
                    <div className="col-10">
                        <input className="form-control" type="text" id="input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Guardado en</label>
                    <div className="col-10">
                        <input className="form-control" type="text" id="input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Estado</label>
                    <div className="col-10">
                        <input className="form-control" type="text" id="input" />
                    </div>
                </div>
                </form>
            </div>
        )
    }
}
export default NewIngreso;