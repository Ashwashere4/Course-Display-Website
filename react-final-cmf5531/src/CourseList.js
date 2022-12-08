import React from "react";

import {Button, Table} from 'reactstrap';

import UpdatePage from "./UpdatePage";


class CourseList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalStatus : false,
      newCourse : ' ',
      newTitle : ' ',
      newDetails : ' ',
      department : ' ',
      college : ' ',
      id : ' '

    }
  }

  toggle=()=>{
    this.setState({modalStatus : !this.state.modalStatus})
  }

  updateCourse = (course) => {
    this.setState({newCourse : course})
    console.log(course)
  }

  updateTitle = (title) => {
    this.setState({newTitle : title})
    console.log(title)
  }

  updateDetails = (detail) => {
    this.setState({newDetails : detail})
    console.log(detail)
  }

  clearAll = () =>{
    this.setState({newCourse : ' ', newTitle : ' ', newDetails : ' '})
    this.toggle()
  }

  updateGraph = (primaryid) => {
    fetch(`http://127.0.0.1:5000/courses/${primaryid}`, {method:"PUT", headers: {'Content-Type' : 'application/json'}, body: JSON.stringify({
      c_number: this.state.newCourse,
      c_title: this.state.newTitle,
      c_details: this.state.newDetails
    })}).then(() => this.props.update())
    this.toggle()


  }

  updateDescription = (department, college, id, newCourse, newDetails, newTitle) => {
    this.setState({department : department, college : college, id: id, newTitle: newTitle, newDetails : newDetails, newCourse : newCourse})
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
            <UpdatePage modalStatus = {this.state.modalStatus} updateCourse = {this.updateCourse} updateTitle = {this.updateTitle}
                    updateDetails = {this.updateDetails} newCourse = {this.state.newCourse} newTitle = {this.state.newTitle}
                    newDetails = {this.state.newDetails} department = {this.state.department} college = {this.state.college} toggle = {this.toggle}
                    cancel = {this.clearAll} commit = {this.updateGraph} id = {this.state.id}
                    ></UpdatePage>
                    
          {this.props.classes.map((course, i) => {

            return (
                <tr key = {i}>
                    <th scope = "row"><Button id = 'deleteButton' onClick = {() => this.props.deleteButton(course[0])}>Delete</Button></th>
                    <th scope = "row"><Button onClick = {() => {this.toggle(); this.updateDescription(course[5], course[6], course[0], course[2], course[3], course[1])}}>Update</Button></th>
                    <th scope="row">{course[0]}</th>
                    <td>{course[4]}</td>
                    <td>{course[5]}</td>
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