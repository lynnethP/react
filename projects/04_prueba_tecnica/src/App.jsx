import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"
import { Otro } from './Components/Otro.jsx'


// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtsWord}?size=50&color=red&&json=true`


export function App() {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>

        </main>

    )

}