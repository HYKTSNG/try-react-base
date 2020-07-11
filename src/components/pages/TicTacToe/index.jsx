/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import { TTTBoard } from "src/components/organisms/TTTBoard"
import { TTTGameInfo } from "src/components/organisms/TTTGameInfo"
import { pt, pt2 } from "src/components/styles/utils"
import { calculateWinner } from "src/utils/tttUtils"

/**
 * @type {("O" | "X" | undefined)[]}
 */

const initialInputValues = [
  /* eslint-disable */
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  /* eslint-enable */
]

/**
 * 三木並べアプリ
 */
let turn = 0
export const TicTacToe = () => {
  const [inputValues, setInputValues] = useState(initialInputValues)

  const onClickSquare = (index) => {
    const next = [...inputValues]

    if (turn % 2 === 0) {
      next[index] = "o"
      turn += 1
    } else {
      next[index] = "x"
      turn += 1
    }

    setInputValues(next)
  }
  const onClickReset = () => {
    setInputValues(initialInputValues)
  }

  return (
    <div css={root}>
      <h1>TicTacToe App</h1>
      <div css={pt2}>
        <div css={pt}>
          <TTTBoard
            inputValues={inputValues}
            isGameOver={false}
            onClickSquare={onClickSquare}
          />
          <div css={pt}>
            <button onClick={onClickReset}>Reset</button>
          </div>
        </div>
        <div css={pt}>
          <TTTGameInfo
            currentPlayerName="O"
            winnerPlayerName={calculateWinner(inputValues)}
          />
        </div>
      </div>
    </div>
  )
}

const root = css`
  padding: 16px;
`
