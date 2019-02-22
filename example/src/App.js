import React from 'react'
import Template from 'maths'

export default class App extends React.Component {
  render() {
    /* const StudentComponent = Template.student  */
    const TeacherComponent = Template.teacher

    return (
      <TeacherComponent />
    )
  }
}