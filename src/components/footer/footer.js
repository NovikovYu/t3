import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../tasks-filter/tasks-filter'
import './footer.css'

const Footer = (props) => {
  const { todos, itemsLeftCounter, onClearCompleted, showMode, onChangeShowMode } = props
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeftCounter} items left</span>

      <TasksFilter todos={todos} showMode={showMode} onChangeShowMode={onChangeShowMode} />

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  todos: [],
  itemsLeftCounter: 0,
  onClearCompleted: () => {},
  showMode: 'all',
  onChangeShowMode: () => {},
}

Footer.propTypes = {
  todos: PropTypes.array,
  itemsLeftCounter: PropTypes.number,
  onClearCompleted: PropTypes.func,
  showMode: PropTypes.string,
  onChangeShowMode: PropTypes.func,
}

export default Footer
