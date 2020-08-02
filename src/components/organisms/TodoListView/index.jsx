/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { ml, pt } from "src/components/styles/utils"

export const TodoListView = ({
  filter,
  onDelete,
  onEndEdit,
  onStartEdit,
  onToggleCompleted,
  todoList,
}) => {
  const [tempText, setTempText] = useState("")

  // 編集中に他の操作を行うのは、実装がやや面倒
  // そのため、編集中に他の操作を防ぐためのフラグ
  const hasAnyEditing = todoList.some((t) => t.isEditing)

  return (
    <div css={root}>
      {todoList
        .filter((t) => {
          if (filter === "active") {
            return !t.isCompleted
          } else if (filter === "completed") {
            return t.isCompleted
          } else {
            return true
          }
        })
        .map((t) => {
          return (
            <div css={pt} key={t.id}>
              {t.isEditing ? (
                <input
                  onChange={(e) => setTempText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onEndEdit(t.id, tempText)
                    }
                    if (e.key === "Escape") {
                      onEndEdit(t.id)
                    }
                  }}
                  type="text"
                  value={tempText}
                />
              ) : (
                <span>
                  <input
                    checked={t.isCompleted}
                    css={checkbox}
                    onChange={() => onToggleCompleted(t.id)}
                    type="checkbox"
                  />
                  <span css={[ml, t.isCompleted && completedText]}>
                    {t.text}
                  </span>
                </span>
              )}
              <button
                css={[ml, editBtn]}
                disabled={hasAnyEditing}
                onClick={() => {
                  setTempText(t.text)
                  onStartEdit(t.id)
                }}
              >
                Edit
              </button>
              <button
                css={[ml, deleteBtn]}
                disabled={hasAnyEditing}
                onClick={() => onDelete(t.id)}
              >
                Delete
              </button>
            </div>
          )
        })}
    </div>
  )
}

const root = css``

const editBtn = css`
  background-color: greenyellow;
`

const deleteBtn = css`
  background-color: lightpink;
`

const checkbox = css`
  width: 16px;
  height: 16px;
`

const completedText = css`
  color: gray;
  text-decoration: line-through;
`
