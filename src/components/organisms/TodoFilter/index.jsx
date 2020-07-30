/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { ml, ml2 } from "src/components/styles/utils"

export const TodoFilter = ({ selected, onSelectFilter }) => {
  return (
    <div css={root}>
      <label>
        <input
          checked={selected === "all"}
          onChange={() => onSelectFilter("all")}
          type="radio"
        />
        <span css={ml}>All</span>
      </label>
      <label css={ml2}>
        <input
          checked={selected === "active"}
          onChange={() => onSelectFilter("active")}
          type="radio"
        />
        <span css={ml}>Active</span>
      </label>
      <label css={ml2}>
        <input
          checked={selected === "completed"}
          onChange={() => onSelectFilter("completed")}
          type="radio"
        />
        <span css={ml}>Completed</span>
      </label>
    </div>
  )
}

const root = css``
