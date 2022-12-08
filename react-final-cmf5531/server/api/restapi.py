from .swen_344_db_utils import *



def rebuildTables():
    conn = connect()
    cur = conn.cursor()
    drop_sql = """
        DROP TABLE IF EXISTS example_table
    """
    create_sql = """
        CREATE TABLE example_table(
            example_col VARCHAR(40)
        )
    """
    cur.execute(drop_sql)
    cur.execute(create_sql)
    conn.commit()
    conn.close()
    
def getCourses():
    result = exec_get_all('select courses.id, c_number, c_title, c_details, dept_id, department.name, college.name FROM courses inner join department ON department.id = courses.dept_id inner join college ON college.id = department.college_id order by id asc')
    
    return result
    

def deleteCourse(primaryid):
    exec_commit('DELETE FROM courses WHERE id = %s', [primaryid])
    
def updateCourse(primaryid, c_number, c_title, c_details):
    exec_commit('UPDATE courses SET c_number = %s, c_title = %s, c_details = %s WHERE id = %s', [c_number, c_title, c_details, primaryid])