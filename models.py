# Import the db from the main app module
from mil import db

# Import datetime for 
from datetime import datetime

# TODO: Validate that the user does 
# not enter more than 300 characters
class Message(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  email = db.Column(db.String(120), nullable=False)
  subject = db.Column(db.String(120))
  message = db.Column(db.String(300))
  date = db.Column(db.DateTime, default=datetime.utcnow)

# Create a class to save all the subscribers
# so that you can mail them
class Subscriber(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(120), nullable=False, unique=True)
  date = db.Column(db.DateTime, default=datetime.utcnow)

  # format the result when fetched
  def __repr__(self):
    return '<Subscriber %r>' % (self.email)

  