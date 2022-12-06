from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from api.swen_344_db_utils import *
from api.example_api import *

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router


api.add_resource(GetCourses, "/courses")
api.add_resource(UpdateCourse, "/courses/<int:primaryId>")
api.add_resource(DeleteCourse, "/courses/<int:primaryid>")


if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('courses_schema.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask



    