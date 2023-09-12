from flask import Flask, request, abort
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


import controller.login
import controller.dataAggregation
