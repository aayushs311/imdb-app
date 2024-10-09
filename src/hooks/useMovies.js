import { useEffect, useState } from "react";
import { TMDBInstance } from "../api/apiAuth";

const useMovies = () => {
    
    const [result, setResult] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState();
    
    const getMovies = async () => {
        try {
            setisLoading(true);
            const res = await TMDBInstance.get(`/discover/movie?page=${page}`);
            setResult(res.data.results);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        result,
        isLoading,
        error,
        page
    }
}

export default useMovies;
