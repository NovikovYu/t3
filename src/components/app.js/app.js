import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

import NewTaskForm from '../new-task-form/new-task-form'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import './app.css'

var defaultTimeStamp = formatDistanceToNow(new Date(2022, 10, 2))

const App = () => {
  let startId = 1000

  const createEl = (description, date = defaultTimeStamp, time = 150) => {
    return {
      liClassName: '',
      description: description,
      created: `created ${date} ago`,
      done: false,
      id: startId++,
      time: time,
    }
  }

  const [toDoItems, setToDoItems] = useState([
    createEl('Deal 1'),
    createEl('Deal 2'),
    createEl('Deal 3'),
    createEl('Deal 4'),
  ])
  const [showMode, setShowMode] = useState('all')

  const deleteItem = (id) => {
    let deadIndex = toDoItems.findIndex((el) => el.id === id)

    let before = toDoItems.slice(0, deadIndex)
    let after = toDoItems.slice(deadIndex + 1)

    let newArr = [...before, ...after]

    setToDoItems(newArr)
  }

  const addTask = (text, time) => {
    setToDoItems((toDoItems) => {
      var timeStamp = formatDistanceToNow(new Date())

      return [...toDoItems, createEl(text, timeStamp, time)]
    })
  }

  const onDo = (id) => {
    setToDoItems((toDoItems) => {
      let idx = toDoItems.findIndex((el) => el.id === id)

      let newEl = { ...toDoItems[idx] }

      newEl.done = !newEl.done

      let newArray = [...toDoItems.slice(0, idx), newEl, ...toDoItems.slice(idx + 1)]

      return newArray
    })
  }

  const onClearCompleted = () => {
    setToDoItems((toDoItems) => {
      let newArray = toDoItems.filter((el) => el.done === false)

      return newArray
    })
  }

  const filter = (arr, showMode) => {
    switch (showMode) {
      case 'all':
        return arr
      case 'active':
        return arr.filter((el) => el.done === false)
      case 'completed':
        return arr.filter((el) => el.done === true)
      default:
        return arr
    }
  }

  const onChangeShowMode = (showMode) => {
    setShowMode(showMode)
  }

  const itemsLeftCounter = toDoItems.filter((el) => el.done === false).length

  const filtredArr = filter(toDoItems, showMode)

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList todos={filtredArr} onDo={onDo} onDelete={deleteItem} />

        <Footer
          todos={filtredArr}
          itemsLeftCounter={itemsLeftCounter}
          showMode={showMode}
          onChangeShowMode={onChangeShowMode}
          onClearCompleted={onClearCompleted}
        />
      </section>
    </section>
  )
}

export default App
