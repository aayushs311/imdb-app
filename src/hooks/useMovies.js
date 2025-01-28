import { useEffect, useState } from "react";
import { TMDBInstance } from "../api/apiAuth";

const useMovies = () => {
    
    const [results, setResult] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState();
    const [totalPages, setTotalPages] = useState(1);
    
    const getMovies = async () => {
        try {
            setisLoading(true);
            const res = await TMDBInstance.get(`/discover/movie?page=${page}`);
            setResult(res.data.results);
            setTotalPages(res.data.total_pages);
        } catch (error) {
            setError(error);
        }
    }

    const handleChange = (newPage) => {
        setPage(newPage);
    }

    useEffect(() => {
        getMovies();
    }, [page])

    return {
        results,
        isLoading,
        error,
        page,
        totalPages,
        handleChange
    }
}

export default useMovies;
