import { fetchGET } from "@/utils/fetch-apis"
import { useEffect, useState } from "react"



const useGetImagePokemon = ( id: string ) => {
    const [resultsApi, setResultsApi] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const url = `${process.env.NEXT_PUBLIC_POKE_API}/pokemon/${id}`

    useEffect(() => {
        (async () => {
            try {
                const res = await fetchGET(url)
                setResultsApi(res)
                setLoading(false)
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [url])


    return {
        resultsApi, loading, error
    }
}

export default useGetImagePokemon
