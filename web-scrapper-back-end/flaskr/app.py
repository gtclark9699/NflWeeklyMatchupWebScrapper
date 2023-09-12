from flask import Flask
from flask_cors import CORS
from controller.dataAggregation import dataAggregationBluePrint
from controller.login import loginBluePrint

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(dataAggregationBluePrint)
app.register_blueprint(loginBluePrint)

CORS(app)




