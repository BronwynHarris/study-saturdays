import React from 'react'
import axios from 'axios'
import StudentList from './StudentList'

export default class Main extends React.Component{

  constructor(){
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get('/student')//got to local host/uri to see what's coming from route
    //always search for route, super set up here
    .then(res=>this.setState({students: res.data}));
  }

  render(){
    return(

    <div id='app'>
      <StudentList props={this.state.students}/>
    </div>
      //<StudentList students={this.students} />
    )
  }
}
