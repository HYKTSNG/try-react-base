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
const defaultPlayerName = "O"
/**
 * 三木並べアプリ
 */

export const TicTacToe = () => {
  const [inputValues, setInputValues] = useState(initialInputValues)
  const [playerName, setPlayerName] = useState(defaultPlayerName)

  const onClickSquare = (index) => {
    // 入力値のセット
    const next = [...inputValues]
    next[index] = playerName
    setInputValues(next)

    // 次のプレイヤーのセット
    if (playerName === "O") {
      setPlayerName("X")
    } else {
      setPlayerName("O")
    }
  }

  const onClickReset = () => {
    setInputValues(initialInputValues)
    setPlayerName(defaultPlayerName)
  }

  const winner = calculateWinner(inputValues)

  return (
    <div css={root}>
      <h1>TicTacToe App</h1>
      <div css={pt2}>
        <div css={pt}>
          <TTTBoard
            inputValues={inputValues}
            isGameOver={winner}
            onClickSquare={onClickSquare}
          />
          <div css={pt}>
            <button onClick={onClickReset}>Reset</button>
          </div>
        </div>
        <div css={pt}>
          <TTTGameInfo
            currentPlayerName={playerName}
            winnerPlayerName={winner}
          />
        </div>
      </div>
    </div>
  )
}

const root = css`
  padding: 16px;
`
