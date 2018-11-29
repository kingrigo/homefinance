import React, {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert} from "reactstrap";
import './style.css';

class Ingresos extends Component {
    constructor(props){
        super(props);
        this.borrarIngreso = this.borrarIngreso.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            ingresos : [],
            modal: false,
            monto : null,
            frecuencia: null,
            estado: null,
            fuente: null,
            lugar: null,
        }
    }
    componentWillMount() {
        fetch('http://127.0.0.1:5000/api/ingreso',{method:'GET',mode: 'cors'})
          .then((response) => {
            return response.json()
          })
          .then((art) => {
            this.setState({ ingresos: art })
          })    
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    borrarIngreso(id){
        const $ = window.$
        $.ajax({
            url: 'http://127.0.0.1:5000/api/ingreso/'+id,
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                window.location.reload();
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const $ = window.$;
        let obj = {
            estado: this.state.estado,
            monto: this.state.monto,
            fuente: this.state.fuente,
            frecuencia: this.state.frecuencia,
            lugar: this.state.lugar
        }
        $.ajax({
            url: 'http://127.0.0.1:5000/api/ingreso',
            type: 'POST',
            dataType: "json",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                window.location.reload();
            },
            error: function (error) {
                console.log(error);
            }
        })
        this.setState({
            modal: false,
        })

    }
    handleChange({target}){
        this.setState({
            [target.name] : target.value
        })
    }
    render() {
        let elemento = '';
        if (this.state.ingresos.length <= 0) {
            elemento = <Alert color="danger">No hay elementos para mostrar</Alert>
        }else{
            elemento = this.state.ingresos.map((ing) => 
                <Alert color="primary" className="ingreso">Estado:<b>{ing.estado}</b> Monto:<b>{ing.monto}</b> Fuente:<b>{ing.fuente}</b> Frecuencia:<b>{ing.frecuencia}</b> Guardado:<b>{ing.lugar}</b>
                <Button className="chota" onClick={()=>this.borrarIngreso(ing.id)}>x</Button></Alert>
            )
            
        }
        return (
            <div>
                <h1>Mis Ingresos</h1>
                {elemento}
                <Button color="danger" onClick={this.toggle} className="float-right">Agregar Ingreso</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Agregar Ingreso</ModalHeader>
                    <form onSubmit={this.handleSubmit}>
                    <ModalBody>
                    <input 
                                type="number" 
                                name="monto" 
                                placeholder="Monto" 
                                value={ this.state.monto }
                                onChange={ this.handleChange } 
                                className="form-control"
                                required
                            />
                            <input 
                                type="text" 
                                name="fuente" 
                                placeholder="Fuente" 
                                value={ this.state.fuente }
                                onChange={ this.handleChange } 
                                className="form-control"
                                required
                            />
                            <input 
                                type="text" 
                                name="frecuencia" 
                                placeholder="Frecuencia" 
                                value={ this.state.frecuencia }
                                onChange={ this.handleChange } 
                                className="form-control"
                                required
                            />
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="lugar" 
                                    placeholder="Lugar" 
                                    value={ this.state.lugar }
                                    onChange={ this.handleChange } 
                                    className="form-control"
                                    required
                                />
                            
                            </div>
                            <div className="form-check">
                                <input id="estadoradio1" className="form-check-input" type="radio" name="estado" onChange={this.handleChange} value="Blanco" required/>
                                <label for="estadoradio1" className="form-check-label">En Blanco</label>
                            </div>
                            <div className="form-check">
                                <input id="estadoradio2" className="form-check-input" type="radio" name="estado" onChange={this.handleChange} value="Negro" />
                                <label for="estadoradio1" className="form-check-label">En Negro</label>
                            </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                        <Button color="primary" type="submit">Agregar</Button>
                    </ModalFooter>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Ingresos;