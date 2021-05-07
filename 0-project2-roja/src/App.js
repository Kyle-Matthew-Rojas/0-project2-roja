import React from  "react";
import './App.css';
import { CourseDisplay } from "./CourseDisplay";

export default class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courseItems: [
        {id: 1, description: " ", semester: " ", prefix: " ", number: " ", grade: " "},
        {id: 2, description: " ", semester: " ", prefix: " ", number: " ", grade: " "},
        {id: 3, description: " ", semester: " ", prefix: " ", number: " ", grade: " "},
      ],
    }
    this.idCounter = 100;

  }
  saveData = (collection, item) => {
    if (item.id === "") {
        item.id = this.idCounter++;
        this.setState(state => state[collection] 
            = state[collection].concat(item));
    } else {
        this.setState(state => state[collection] 
            = state[collection].map(stored => 
                  stored.id === item.id ? item: stored))
    } 
    
}
cancelChange = () => {
 
}

render (){
    return (
      <>
        <CourseDisplay
        descripton="IDontKnowWhatIsThisFor"
        coursesDisplayed={this.state.courseItems}
        saveCourseDisplayCallBack= {p => this.saveData("courseItems", p)}
        cancelChange={this.cancelChange}
         />
      </>
    );
  }
  
  
}
