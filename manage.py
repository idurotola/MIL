#! /usr/bin/env python

from mil import app, db
from flask.ext.script import Manager, prompt_bool

manager = Manager(app)
"""
  By decorating this functions with 
  manager.command these functions will 
  become available in the command line.
"""
@manager.command
def initdb():
  db.create_all()
  print('Initialized the database')

# add the decorator for droping db
@manager.command
def dropdb():
  if prompt_bool('Are you sure you want to loose all your data'):
      db.drop_all()
      print('Dropped the database')

if __name__=='__main__':
  manager.run()