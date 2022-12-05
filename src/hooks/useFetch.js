import { useEffect, useState } from "react";
import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const useFetch = url=>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await axios.get(url)
                setData(res.data);
            }catch(err){
                setError(err)
            }
            setLoading(false)
        };
        fetchData();
    }, []); // we can add url here so that it will update immediately 

    const reFetch = async ()=>{
        setLoading(true)
        try{
            const res = await axios.get(url)
            setData(res.data);
        }catch(err){
            setError(err)
        }
        setLoading(false)
    };

    return {data, loading, error, reFetch}
};

export default useFetch; 