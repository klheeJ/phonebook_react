import { useState, useEffect } from "react"
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) //<-- with [] not there, it will occur everytime something changes, with [], every time the data table is created x 1.
    //basically wahtever is in the [], if there's a change then the change will happen

  return { contactData, getData:handleDataFetch }
}
