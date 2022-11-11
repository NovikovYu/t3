import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task/task'

import './task-list.css'
import '../task/task.css'

const TaskList = (props) => {
  const { todos, onDelete, onDone, onDo } = props

  const elements = todos.map((item) => {
    return (
      <Task
        data={item}
        key={item.id}
        onDone={() => onDone(item.id)}
        onDo={() => onDo(item.id)}
        onDelete={() => onDelete(item.id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  todos: [],
  onDelete: () => {},
  onDone: () => {},
  onDo: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  onDone: PropTypes.func,
  onDo: PropTypes.func,
}

export default TaskList
