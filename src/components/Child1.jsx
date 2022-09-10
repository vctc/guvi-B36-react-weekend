import React from 'react'

const Child1 = (props) => {
    // console.log('props of child1',props)
  return (
    <div>
      <h1>Child 1 name is {props.student.name} </h1>
    </div>
  )
}

export default Child1
