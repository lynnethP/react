import { useState, useEffect } from "react"
import { getRandomFact } from "../services/fact.js"
export function useCatFact () {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        // getRandomFact().then(setFact)   //Puede ser con .then o con await como en handleClick
        getRandomFact().then(newFact => setFact(newFact))   
    }
    //Recuperar cita al cargar la página
    useEffect(refreshFact, [])
    
    return { fact, refreshFact}
}