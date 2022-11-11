import React, { useState } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

const NewTaskForm = (props) => {
  let [taskName, setTaskName] = useState('')
  let [taskMin, setTaskMin] = useState('')
  let [taskSec, setTaskSec] = useState('')

  const onChange = (e) => {
    if (e.target.name === 'min') {
      setTaskMin(e.target.value)
    } else if (e.target.name === 'sec') {
      setTaskSec(e.target.value)
    } else {
      setTaskName(e.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { addTask } = props

    if (taskName && taskSec) {
      let totalTime = parseInt(taskMin * 60) + parseInt(taskSec)
      addTask(taskName, totalTime)

      setTaskName('')
      setTaskMin('')
      setTaskSec('')
    }
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo"
        onChange={onChange}
        placeholder="What needs to be done?"
        autoFocus
        value={taskName}
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        onChange={onChange}
        type="number"
        value={taskMin}
        name="min"
        step="1"
        min="0"
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        onChange={onChange}
        type="number"
        value={taskSec}
        name="sec"
        step="1"
        min="1"
        max="59"
      ></input>
      <button className="new-todo-btn">Add task</button>
    </form>
  )
}

NewTaskForm.defaultProps = {
  addTask: () => {},
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}

export default NewTaskForm
