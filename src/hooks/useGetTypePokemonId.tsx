/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchGET } from '@/utils/fetch-apis'
import { useEffect, useState } from 'react'

const useGetTypePokemonId = (id: string) => {

    const [resultsApiId, setResultsApi] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const url = `${process.env.NEXT_PUBLIC_POKE_API}/type/${id}`

    useEffect(() => {
        (async () => {
            try {
                const res = await fetchGET(url)
                setResultsApi(res)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [url])


    return { resultsApiId, loading, error }
}

export default useGetTypePokemonId
