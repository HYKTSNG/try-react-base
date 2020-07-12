/**
 *
 * @param {("O" | "X" | undefined)[]} values
 * @returns {"O" | "X" | undefined} 勝者のマーク
 */

// const values = [
//  /* eslint-disable prettier/prettier */
//   o, _, o,
//   _, o, _,
//   x, x, x,
//   /* eslint-enable prettier/prettier */
// ]

const x = "X"
const o = "O"

export const calculateWinner = (values) => {
  if (
    // 横ラインの勝利
    (values[0] === o && values[1] === o && values[2] === o) ||
    (values[3] === o && values[4] === o && values[5] === o) ||
    (values[6] === o && values[7] === o && values[8] === o) ||
    // 縦ラインの勝利
    (values[0] === o && values[3] === o && values[6] === o) ||
    (values[1] === o && values[4] === o && values[7] === o) ||
    (values[2] === o && values[5] === o && values[8] === o) ||
    // ななめラインの勝利
    (values[0] === o && values[4] === o && values[8] === o) ||
    (values[2] === o && values[4] === o && values[6] === o)
  ) {
    return o
  } else if (
    // 横ラインの勝利
    (values[0] === x && values[1] === x && values[2] === x) ||
    (values[3] === x && values[4] === x && values[5] === x) ||
    (values[6] === x && values[7] === x && values[8] === x) ||
    // 縦ラインの勝利
    (values[0] === x && values[3] === x && values[6] === x) ||
    (values[1] === x && values[4] === x && values[7] === x) ||
    (values[2] === x && values[5] === x && values[8] === x) ||
    // ななめラインの勝利
    (values[0] === x && values[4] === x && values[8] === x) ||
    (values[2] === x && values[4] === x && values[6] === x)
  ) {
    return x
  } else {
    return undefined
  }
}
