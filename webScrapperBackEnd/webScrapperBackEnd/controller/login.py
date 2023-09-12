from app import app
import logging
from flask_cors import CORS
from flask import Flask, request, jsonify
from http import HTTPStatus
CORS(app)

logging.basicConfig(level=logging.DEBUG)

@app.route('/api/login', methods=['POST'])
def login():

    data = request.form
    formEmail =data.get('email')
    print("form email: " + formEmail)
    print("email: " + request.json['email'])
    print("password: " + request.json['password'])

    data = {
        "token": "test",
        "expiresIn": 10,
        "authUserState": "auth"
    }
    return jsonify(data)
    
