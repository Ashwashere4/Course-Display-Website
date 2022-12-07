import React from "react";

import {Table} from 'reactstrap';

import UpdatePage from "./UpdatePage";


class CourseList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalStatus : false,
      newCourse : ' ',
      newTitle : ' ',
      newDetails : ' '
    }
  }

  toggle=()=>{
    this.setState({modalStatus : !this.state.modalStatus})
  }

  updateCourse = (course) => {
    this.setState({newCourse : course})
  }

  updateTitle = (title) => {
    this.setState({newTitle : title})
  }

  updateDetails = (detail) => {
    this.setState({newDetails : detail})
  }

  clearAll = () =>{
    this.setState({newCourse : ' ', newTitle : ' ', newDetails : ' '})
    this.toggle()
  }


  render(){
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
          {this.props.classes.map((course) => {

            return (
                <tr>
                    <th scope = "row"><button id = 'deleteButton' onClick = {() => this.props.deleteButton(course[0])}>Delete</button></th>
                    <th scope = "row"><button onClick = {() => this.toggle()}>Update</button>
                      <UpdatePage modalStatus = {this.state.modalStatus} updateCourse = {this.updateCourse} updateTitle = {this.updateTitle}
                    updateDetails = {this.updateDetails} newCourse = {this.state.course} newTitle = {this.state.newTitle}
                    newDetails = {this.state.newDetails} department = {course[5]} college = {course[6]} toggle = {this.toggle}
                    cancel = {this.props.clearAll} commit = {this.commit} id = {course[0]}
                    ></UpdatePage></th>
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
  }

export default CourseList;