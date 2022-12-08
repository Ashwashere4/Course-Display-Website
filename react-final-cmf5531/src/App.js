import CourseList from './CourseList';
import './App.css';
import React from 'react';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      database : []
    }
  }

    componentDidMount() {

      this.updatedatabase()
    }

    updatedatabase = () =>{
      fetch('http://127.0.0.1:5000/courses')
      .then((response) => response.json()
      .then((database) => {this.setState({database : database})}))
    }

    deleteCourse = (primaryid) => {
      fetch(`http://127.0.0.1:5000/courses/${primaryid}`, {method:"DELETE"})

      this.updatedatabase()
    }


  render(){
  return (
    <div>
      <CourseList
      classes = {this.state.database} deleteButton = {this.deleteCourse} commit = {this.updateCourse} update = {this.updatedatabase}></CourseList>
    </div>
  );
  }
}

export default App;
