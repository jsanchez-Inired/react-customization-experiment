import {request_to_config} from "./request.ts";
import {useEffect, useState} from "react";


export async function getOption<T>(name: string): Promise<T> 
{
    const response = await request_to_config("option", "by_name", {name: name});
    return response.value as T;
}

export function useOption<T>(name: string): [FETCH_STATUS, T | undefined] 
{
    const [optionValue, setOptionValue] = useState<T | undefined>(undefined);
    const [fetchStatus, setFetchStatus] = useState<FETCH_STATUS>(FETCH_STATUS.FETCHING);
    
    function fetchOption()
    {
        getOption<T>(name).then(response => {
            setOptionValue(response);
            setFetchStatus(FETCH_STATUS.SUCCESS);
        }).catch(() => {
            setFetchStatus(FETCH_STATUS.ERROR);
        });
    }
    
    useEffect(fetchOption, [name]);
    
    return [fetchStatus, optionValue];
}

export enum FETCH_STATUS {
    FETCHING,
    SUCCESS,
    ERROR
}