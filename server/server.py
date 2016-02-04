from twilio.rest import TwilioRestClient
from flask import Flask, request, render_template, redirect, url_for
import twilio.twiml 

app = Flask(__name__)
app.config.from_pyfile('config.py')

@app.route('/', methods=['GET', 'POST'])
def index():
    pass

@app.route('/test-text', methods=['GET', 'POST'])
def test_text():
    # we'll replace the following line later in the tutorial
    resp = twilio.twiml.Response()
    resp.message("Hello, world")
    return str(resp)

"""
if __name__ == "__main__":
    app.run(host='0.0.0.0')
    
"""
