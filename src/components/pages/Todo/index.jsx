/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { TodoFilter } from "src/components/organisms/TodoFilter"
import { TodoListView } from "src/components/organisms/TodoListView"
import { ml, pt, pt2 } from "src/components/styles/utils"

const createId = () => {
  return Math.random()
}

/**
 * TODOアプリ
 */
export const Todo = () => {
  const [todoList, setTodoList] = useState([])
  /**
   * @type ["all" | "active" | "completed", Function]
   */
  const [filter, setFilter] = useState("all")
  const [tempText, setTempText] = useState("")

  const onAddTodo = (event) => {
    event.preventDefault()

    if (tempText === "") {
      return
    }

    const next = [...todoList]
    next.push({
      id: createId(),
      isCompleted: false,
      isEditing: false,
      text: tempText,
    })
    setTodoList(next)

    // reset
    setTempText("")
  }

  const onDeleteTodo = (targetId) => {
    setTodoList(todoList.filter((t) => t.id !== targetId))
  }

  const onStartEditTodo = (targetId) => {
    const next = [...todoList]
    const target = next.find((t) => t.id === targetId)
    target.isEditing = true
    setTodoList(next)
  }

  const onEndEditTodo = (targetId, text) => {
    const next = [...todoList]
    const target = next.find((t) => t.id === targetId)
    if (text) {
      target.text = text
    }
    target.isEditing = false
    setTodoList(next)
  }

  const onToggleCompleted = (targetId) => {
    const next = [...todoList]
    const target = next.find((t) => t.id === targetId)
    target.isCompleted = !target.isCompleted
    setTodoList(next)
  }

  return (
    <div css={root}>
      <h1>Todo App</h1>
      <form onSubmit={onAddTodo}>
        <input
          onChange={(e) => setTempText(e.target.value)}
          type="text"
          value={tempText}
        />
        <button css={ml} type="submit">
          Add
        </button>
      </form>

      <div css={pt}></div>
      <TodoListView
        filter={filter}
        onDelete={onDeleteTodo}
        onEndEdit={onEndEditTodo}
        onStartEdit={onStartEditTodo}
        onToggleCompleted={onToggleCompleted}
        todoList={todoList}
      />

      <div css={pt2}></div>
      <TodoFilter onSelectFilter={setFilter} selected={filter} />
    </div>
  )
}

const root = css`
  padding: 16px;
`
