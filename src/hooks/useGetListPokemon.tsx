/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchGET } from '@/utils/fetch-apis'
import { useEffect, useState } from 'react'

const useGetListPokemon = () => {
    const [resultsApi, setResultsApi] = useState(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const url = `${process.env.NEXT_PUBLIC_POKE_API}/pokemon`

    useEffect(() => {
        (async () => {
            try {
                const res = await fetchGET(url)
                setResultsApi(res)
                console.log("res ==>", res)
                setLoading(false)
            } catch(error: any) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [url])


    return {
        resultsApi, loading, error
    }
}

export default useGetListPokemon
