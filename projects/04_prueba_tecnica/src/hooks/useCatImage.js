import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({fact}) {
    
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
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
