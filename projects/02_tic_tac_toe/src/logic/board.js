import { WINNER_COMBOS } from "../components/const.js"

//Revisar combinaciones ganadoras 
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    return null     //Si no hay ganador
}


export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)   //si todas las posiciones (square) son distintas de null
}