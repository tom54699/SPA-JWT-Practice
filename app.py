from flask import Flask, make_response,request,render_template,redirect,session,url_for,jsonify
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    create_refresh_token, get_jwt_identity,unset_access_cookies,unset_refresh_cookies,set_access_cookies,set_refresh_cookies,
    get_jwt,get_jwt_header
)
import setting


app=Flask(__name__)
app.config.from_object(setting.BaseConfig)
jwt = JWTManager(app)
CORS(app,supports_credentials=True)

# 404都集中在這邊
"""
@app.errorhandler(404)
def handle_404(e):
    if request.method == 'GET':
        print(request.path)
        return redirect("/")
    return e
"""
@app.route("/gamePage")
@app.route("/error")
@app.route("/")
def login_page():
    request_path = request.path
    return render_template("index.html",request_path=request_path)


# 檢查有無登入狀態的api
@app.route("/login",methods=["GET"])
@jwt_required(refresh=True,optional=True)
def check_status():
    try:
        identity = get_jwt_identity()
        if identity != None:
            status = "success"
            return jsonify(status=status)
        else:
            return redirect("/")
    except Exception as ex:
        status = "error"
        problem = ex
        return jsonify(status=status,problem=problem)

@app.route("/login",methods=["POST"])
def login():
    try:
        login_password = request.json.get("password")
        if login_password == "sabaton":
            # 帶JWT
            access_token = create_access_token(identity = login_password, fresh=True)
            refresh_token = create_refresh_token(identity = login_password)
            # 把access_token和status都弄成json傳過去
            status = "success"
            resp = jsonify(access_token=access_token,status=status)
            set_refresh_cookies(resp,refresh_token)
        else:
            status = "error"
            problem = "Password is wrong, idiot!!"
            return jsonify(status=status,problem=problem)
            #return redirect("/error?error=密碼錯誤")
        return resp,200
    except Exception as ex:
        status = "error"
        problem = ex
        return jsonify(status=status,problem=problem)

@app.route("/enterGamePage",methods=["GET"])
@jwt_required(fresh=True,optional=True)
def game_start():
    try:
        identity = get_jwt_identity()
        print("identity",identity)
        if identity != None:
            jwt = get_jwt()
            header = get_jwt_header()
            print(identity,jwt,header)
            status = "success"
            return jsonify(status=status)
        else:
            request_path = request.path
            print(request_path)
            return render_template("index.html",request_path=request_path)
    except Exception as ex:
        status = "error"
        problem = ex
        return jsonify(status=status,problem=problem)

@app.route("/logout",methods=["GET"])
def logout():
    try:
        response = jsonify({"status": "success"})
        unset_refresh_cookies(response)
        return response
    except Exception as ex:
        status = "error"
        problem = ex
        return jsonify(status=status,problem=problem)

@app.route("/refresh", methods=["GET"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity, fresh=True)
    resp = jsonify(access_token=access_token,status="success")
    refresh_token = create_refresh_token(identity = identity)
    set_refresh_cookies(resp,refresh_token)
    return resp

if __name__ == "__main__":
    app.run(debug=True)