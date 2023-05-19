import { useState, useEffect } from 'react';
import axios from 'axios';
// import {RAPID_API_KEY} from '.env';

// const rapidApiKey = '0520fd8e2dmshb37d0e82dd30d00p1014e8jsn7f6deb7c773d';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            // 'X-RapidAPI-Key': '0520fd8e2dmshb37d0e82dd30d00p1014e8jsn7f6deb7c773d',
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnk4bkzuUZVLZA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            // console.log(error);
            alert('There is an error: '+ error)
        } finally {
            setIsLoading(false);
        }
    }
    useEffect( () => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;