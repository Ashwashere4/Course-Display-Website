import React from "react";

import {Table} from 'reactstrap';


const CourseList = (props) => {
      return (
        <Table striped dark>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Update</th>
              <th>ID</th>
              <th>Dept</th>
              <th>Class</th>
              <th>Title</th>
              <th>Details</th>
            </tr>
          </thead>
            <tbody>
          {props.classes.map((course) => {
            return (
                <tr>
                    <th scope = "row"><button id = 'deleteButton' onClick = {() => props.deleteButton(course[0])}>Delete</button></th>
                    {/* <th scope = "row"><UpdatePage></UpdatePage></th> */}
                    <th scope="row">{course[0]}</th>
                    <td>{course[4]}</td>
                    <td>{course[1]}</td>
                    <td>{course[2]}</td>
                    <td>{course[3]}</td>
                </tr>
            )
          })
          }
          </tbody>
          
        </Table>
      );
    }

export default CourseList;