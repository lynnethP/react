export const saveGameStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))    //guardar partida
    window.localStorage.setItem('turn', newTurn)  
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}