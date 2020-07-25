/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"

/**
 * TODOアプリ
 */
// 初期値のList
const initialState = [
  // Sample data
  // {
  //   isCompleted: false,
  //   task: "0000000",
  // },
  // {
  //   isCompleted: false,
  //   task: "1111111111",
  // },
]

export const Todo = () => {
  const [task, setTask] = useState("")
  const [todoList, setTodoList] = useState(initialState)

  const onChangeTask = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === "") return
    //  setTodoList((prev) => [...prev, { isCompleted: false, task }])
    const next = [...todoList, { isCompleted: false, task }]
    setTodoList(next)
    setTask("")
  }

  return (
    <div>
      <div css={root}>Todo App</div>
      <div css={inputWrapper}>
        <form onSubmit={handleSubmit}>
          Add Task :{" "}
          <input
            // FORM の仕様
            onChange={onChangeTask}
            placeholder="Add New Task"
            value={task}
          />
        </form>
        <button
          // TODO リストに追加ボタンを実装
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          追加
        </button>
      </div>

      <ul>
        {todoList.map((todo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

const root = css`
  font-size: 56px;
  padding-top: 56px;
  padding-left: 64px;
`
const inputWrapper = css`
  font-size: 24px;
  padding-top: 24px;
  padding-left: 56px;
`
// 最後に色付ける
// background-color: aquamarine;
