import React, { useState } from 'react'
import './task.css'
import PropTypes from 'prop-types'

const Task = (props) => {
  const [timer, setTimer] = useState(props.data.time)
  const [timerNum, setTimerNum] = useState('')

  const startTimer = () => {
    if (!timerNum) {
      let timerId = setInterval(decreaseTimer, 1000)
      setTimerNum(timerId)
    }
  }

  const stopTimer = () => {
    if (timerNum) {
      clearInterval(timerNum)
      setTimerNum('')
    }
  }

  const decreaseTimer = () => {
    if (timer > 0) {
      setTimer((t) => t - 1)
    }
  }

  const { data, onDelete, onDo } = props

  let classes = data.liClassName

  if (data.done) {
    classes += ' completed'
  }

  return (
    <li className={classes}>
      <div className="view">
        <label>
          <span className="title" onClick={onDo}>
            {data.description}
          </span>
          <span className="description">
            <button className="icon icon-play" onClick={() => startTimer()}></button>
            <button className="icon icon-pause" onClick={() => stopTimer()}></button>
            <span className="timer-time-span">
              <span>{Math.floor(timer / 60)}</span>
              <span> : </span>
              <span>{timer - Math.floor(timer / 60) * 60}</span>
            </span>
          </span>
          <span className="description">{data.created}</span>
        </label>

        <button className="icon icon-edit"></button>

        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
    </li>
  )
}

Task.defaultProps = {
  data: [],
  onDelete: () => {},
  onDo: () => {},
}

Task.propTypes = {
  data: PropTypes.object,
  onDelete: PropTypes.func,
  onDo: PropTypes.func,
}

export default Task
