/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchGET } from "@/utils/fetch-apis";
import { useEffect, useState } from "react";


const useGetListPokemonType = () => {
    const [resultsApi, setResultsApi] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const url = `${process.env.NEXT_PUBLIC_POKE_API}/type`;

    useEffect(() => {
        let isMounted = true; // Control de desmontaje

        const fetchData = async () => {
            try {
                const res = await fetchGET(url);
                if (isMounted) {
                    setResultsApi(res);
                    setLoading(false);
                }
            } catch (error: any) {
                if (isMounted) {
                    setError(error.message || "Error al cargar los datos");
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Se desmonta el componente
        };
    }, [url]);

    return { resultsApi, loading, error };
};

export default useGetListPokemonType;