import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        axios(url, option).then((response) => {
            if (isMounted) {
                setData(response.data);
                setError(null);
            }
        }).catch((error) => {
            if (isMounted) {
                setError(error);
                setData(null);
            }
        }).finally(() => {
            if (isMounted) {
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading, error };
}