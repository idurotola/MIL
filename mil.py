import os
import json
"""
  Get an instance of flask into the 
  project
"""
from flask import Flask, render_template, url_for, request, abort
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))
"""
  calls the flask constructor
  which creates a global flask application object
  @param - arg
"""
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'mil.db')
db = SQLAlchemy(app)

import models

@app.route('/')
@app.route('/index')
"""
  This function is decorated with 
  the route decorator above
"""
def index():
  return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
  subscriber_email = request.form['email']
  """
    If the subscriber email exists already
    abort the request and return
  """
  subscriber = models.Subscriber
  email_exists = subscriber.query.filter(subscriber.email == subscriber_email).first()
  print(email_exists)
  if email_exists:
    return abort(404)
  sb = models.Subscriber(email=subscriber_email)
  db.session.add(sb)
  db.session.commit()
  return 'OK'

def store_message(name, email, subject, message):
  msg = models.Message(
    name=name,
    email=email,
    subject=subject,
    message=message
  )
  db.session.add(msg)
  db.session.commit()

"""
  The message route submits user data
  to the database.
"""
@app.route('/message', methods=['POST'])
def message():
  name = request.form['name']
  email = request.form['email']
  subject = request.form['subject']
  message = request.form['message']
  store_message(name, email, subject, message)
  return 'OK'

if __name__  == "__main__":
  app.run(debug=True)