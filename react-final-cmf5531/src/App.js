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

      fetch('http://127.0.0.1:5000/courses')
      .then((response) => response.json()
      .then((database) => {this.setState({database : database})}))

    }

  
    deleteCourse(primaryId){
      fetch(`http://127.0.0.1:5000/courses/${primaryId}`, {method:"DELETE"})
    }

    updateCourse(primaryId, c_number, c_title, c_details){
      fetch(`http://127.0.0.1:5000/courses/${primaryId}`, {method:"PUT", body: JSON.stringify({
        c_number: c_number,
        c_title: c_title,
        c_details: c_details
      })})
    }


  render(){
  return (
    <div>
      <CourseList
      classes = {this.state.database} deleteButton = {this.deleteCourse}></CourseList>
    </div>
  );
  }
}

export default App;
