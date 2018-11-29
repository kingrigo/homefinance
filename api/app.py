from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Ingreso(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    monto = db.Column(db.Float())
    frecuencia = db.Column(db.String(80))
    lugar = db.Column(db.String(80))
    estado = db.Column(db.String(80))
    fuente = db.Column(db.String(80))
    def __init__(self, monto, frecuencia, lugar, estado, fuente):
        self.monto = monto
        self.frecuencia = frecuencia
        self.lugar = lugar
        self.estado = estado
        self.fuente = fuente

class IngresoSchema(ma.Schema):
    class Meta:
        fields = ('monto','frecuencia','lugar','estado','fuente','id')

ingreso_schema = IngresoSchema()
ingresos_schema = IngresoSchema(many=True)

@app.route('/api/ingreso', methods=['POST'])
def add_ingreso():
    monto = request.json['monto']
    frecuencia = request.json['frecuencia']
    lugar = request.json['lugar']
    estado = request.json['estado']
    fuente = request.json['fuente']
    new_ingreso = Ingreso(monto,frecuencia,lugar,estado,fuente)
    db.session.add(new_ingreso)
    db.session.commit()
    return jsonify({'message':'Ingreso creado exitosamente'})

@app.route('/api/ingreso',methods=['GET'])
def get_ingreso():
    all_ingresos = Ingreso.query.all()
    result = ingresos_schema.dump(all_ingresos)
    return jsonify(result.data)

@app.route("/api/ingreso/<id>", methods=["PUT"])
def user_update(id):
    ingreso = Ingreso.query.get(id)
    monto = request.json['monto']
    frecuencia = request.json['frecuencia']
    lugar = request.json['lugar']
    estado = request.json['estado']
    fuente = request.json['fuente']

    ingreso.monto = monto
    ingreso.frecuencia = frecuencia
    ingreso.lugar = lugar
    ingreso.estado = estado
    ingreso.fuente = fuente

    db.session.commit()
    return jsonify({'message':'Ingreso editado con exito'})


@app.route('/api/ingreso/<id>',methods=['DELETE'])
def delete_ingreso(id):
    ingreso = Ingreso.query.get(id)
    db.session.delete(ingreso)
    db.session.commit()

    return jsonify({'message':'Ingreso borrado con exito'})
