from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
from .swen_344_db_utils import *
from api import restapi

class ExampleApi(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
       result = exec_get_one("SELECT COUNT(*) FROM courses");
       return result

class TestMessage(Resource):
    def get(self):
        return "Modal components can use onOpened to fetch data dynamically!"
    
class GetCourses(Resource):
    
    def get(self):
        
        courseList = []
        courses = restapi.getCourses()
        
        for i in courses:
            courseList.append(i)
            
        
        return (courseList, 201)
    
    
class UpdateCourse(Resource):
    
    def put(self, primaryid):
        
        
        if primaryid != None:
            parser = reqparse.RequestParser()
            parser.add_argument('c_number', type = str)
            parser.add_argument('c_title', type = str)
            parser.add_argument('c_details', type = str)
            
            args = parser.parse_args()
            
            restapi.updateCourse(primaryid, args['c_number'], args['c_title'], args['c_details'])
            
            return("Course Updated!", 202)
        
        else:
            return("ERROR, COURSE DOESN'T EXIST", 406)
            
class DeleteCourse(Resource):
    
    def delete(self, primaryid):
        
        print(primaryid)
        if (primaryid != None):
            restapi.deleteCourse(primaryid)
            return ("Course Deleted", 202)
        
        else:
            return ("ERROR, COURSE DOESN'T EXIST", 406)
    
    