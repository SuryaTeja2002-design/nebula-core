from flask import Flask, request, jsonify
import time

app = Flask(__name__)
latest_alert = {}

@app.route("/detect", methods=["POST"])
def detect():
    data = request.json
    if data["volume"] > 1000000:
        latest_alert.update({"fraud": True, "reason": "Volume spike", "timestamp": time.time()})
        return jsonify(latest_alert)
    return jsonify({"fraud": False})

@app.route("/latest-alert", methods=["GET"])
def latest():
    return jsonify(latest_alert or {"fraud": False})
