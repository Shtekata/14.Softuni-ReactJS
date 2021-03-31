import { useEffect, useState } from "react";

const useFetch = (url, initialValue) => {
    const [state, setState] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(x => x.json())
            .then(setState)
            .then(x => setIsLoading(false))
    }, [url]);

    return [state, isLoading];
};
export default useFetch;