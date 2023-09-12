from flask import request, jsonify
from controller import loginBluePrint

@loginBluePrint.route('/api/login', methods=['POST'])
def login():

    print("email: " + request.json['email'])
    print("password: " + request.json['password'])

    data = {
        "token": "test",
        "expiresIn": 10,
        "authUserState": "auth"
    }
    return jsonify(data)
    
