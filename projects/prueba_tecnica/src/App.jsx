import { useEffect, useState } from "react"

export function App() {
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtsWord}?size=50&color=red&&json=true`
    const [fact, setFact] = useState()
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)        
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])
    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}          
        </main>
    )
}