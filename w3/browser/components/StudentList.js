import React from 'react'
import axios from 'axios'
import SingleStudent from './SingleStudent'

// export default class StudentList extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {}
//   }

//   componentDidMount() {

//   }
// }

const StudentList = (props)=>{
  return (
      <ul>
        {this.state.students.map((student)=> {
          return <li key={student.id}>{student.firstName} {student.lastName}</li>
        })}
      </ul>
  )
}
export default StudentList

