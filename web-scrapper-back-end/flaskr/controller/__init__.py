from flask import Blueprint

loginBluePrint = Blueprint('loginBluePrint', __name__, static_folder='controller.login')

dataAggregationBluePrint = Blueprint('dataAggregationBluePrint', __name__, static_folder='controller.dataAggregation')
