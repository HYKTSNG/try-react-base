/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"

/**
 * TODOアプリ
 */

export const Todo = () => {
  // 初期値のList
  const initialState = [
    {
      isCompleted: false,
      task: "sososo",
    },
    {
      isCompleted: false,
      task: "Learn vue.js",
    },
  ]
  const [text, setTask] = useState("")
  const [todos, setTodo] = useState(initialState)

  const handleNewTask = (e) => {
    setTask(e.target.value)
  }

  const onClickAdd = (e) => {
    console.log(e)
  }

  return (
    <div>
      <div css={root}>Todo App</div>
      <div css={inputWrapper}>
        <input
          // FORM の仕様
          onChange={handleNewTask}
          placeholder="Add New Task"
          value={text}
        />
        <button
          // TODO リストに追加ボタンを実装
          onClick={(e) => {
            onClickAdd(e)
          }}
        >
          追加
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
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
