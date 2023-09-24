import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/fact.js"


// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtsWord}?size=50&color=red&&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage({fact}) {
    
    const [imageUrl, setImageUrl] = useState()

    //Recuperar imagen cada vez que se tiene una cita
    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])
    return imageUrl
}

export function App() {
    const [fact, setFact] = useState()
    const imageUrl = useCatImage({fact})
    
    //Recuperar cita al cargar la página
    useEffect(() => {
        getRandomFact().then(setFact)   //Puede ser con .then o con await como en handleClick
        // getRandomFact().then(newFact => setFact(newFact))   

    }, []) 

    

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )

}