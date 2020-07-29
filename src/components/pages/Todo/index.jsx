/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useState } from "react"

/**
 * TODOアプリ
 */
// 初期値のList
const initialState = [
  // Sample data
  {
    isCompleted: false,
    task: "0000000",
  },
  {
    isCompleted: false,
    task: "1111111111",
  },
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
  // DELETEボタンの中身
  const onClickDelete = (index) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  // EDITボタンの中身
  const onClickEdit = console.log("a")

  // checkBoxの中身
  const handleCheckboxChanges = (task) => {
    setTodoList(
      todoList.filter((x) => {
        if (x === task) x.doning = !x.doing
        return x
      })
    )
  }

  return (
    <React.Fragment>
      <div>
        <div css={root}>Todo App</div>
        <div css={inputWrapper}>
          <form onSubmit={handleSubmit}>
            Add Task :
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
            ADD
          </button>
        </div>

        <ul>
          {todoList.map((todo, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ul css={inputWrapper} key={index}>
              <input css={checkBoxWrapper} type="checkbox" />
              {todo.task} {/* EDI Tボタンの実装 */}
              <span css={editWrapper} onClick={() => onClickEdit(index)}>
                EDIT
              </span>
              {/* DELETEボタンの実装 */}
              <span css={deleteWrapper} onClick={() => onClickDelete(index)}>
                DELETE
              </span>{" "}
            </ul>
          ))}
          <ul css={radioWrapper}>
            <input type="radio" />
            ALL
            <input type="radio" />
            Active
            <input type="radio" />
            Completed
          </ul>
        </ul>
      </div>
    </React.Fragment>
  )
}

const root = css`
  font-size: 56px;
  padding-top: 56px;
  padding-left: 56px;

  text-indent: 0.5em;
`
const inputWrapper = css`
  font-size: 24px;
  padding-top: 24px;
  padding-left: 56px;
`

const deleteWrapper = css`
  text-indent: 1em;
  margin-left: 8px;
  background-color: lightpink;
`

const editWrapper = css`
  margin-left: 8px;
  margin-right: 8px;
  background-color: greenyellow;
  text-indent: 1em;
`
const checkBoxWrapper = css`
  width: 16px;
  height: 16px;
`

// ラジオボタン
const radioWrapper = css`
  margin-left: 32px;
  margin-top: 32px;
  letter-spacing: 0.1em;
  text-indent: 0.5em;
  padding-left: 56px;
  font-size: 24px;
`
