/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

  const onClickDelete = (index) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  const onClickEdit = console.log("a")

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
          <li key={index}>
            {todo.task} {/* EDITボタンの実装 */}
            <span css={editWrapper} onClick={() => onClickEdit(index)}>
              EDIT
            </span>
            {/* DELETEボタンの実装 */}
            <span css={deleteWrapper} onClick={() => onClickDelete(index)}>
              DELETE
            </span>{" "}
          </li>
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

const deleteWrapper = css`
  margin-left: 8px;
  background-color: lightpink;
`

const editWrapper = css`
  margin-left: 8px;
  background-color: greenyellow;
`

// 最後に色付ける
// background-color: aquamarine;

// ラジオボタン
