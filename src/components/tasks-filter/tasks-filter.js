import React from 'react'
import './tasks-filter.css'
import PropTypes from 'prop-types'

const TasksFilter = (props) => {
  const onChangeShowModeWithId = (e) => {
    props.onChangeShowMode(e.target.name)
  }

  const { showMode } = props

  let buttonsData = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]
  let btns = buttonsData.map(({ name, label }) => {
    let claz = showMode === name ? 'selected' : ''

    return (
      <li key={name}>
        <button className={claz} name={name} onClick={onChangeShowModeWithId}>
          {label}
        </button>
      </li>
    )
  })
  return <ul className="filters">{btns}</ul>
}

TasksFilter.defaultProps = {
  showMode: 'all',
}

TasksFilter.propTypes = {
  showMode: PropTypes.string,
}

export default TasksFilter
