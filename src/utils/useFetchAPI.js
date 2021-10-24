import axios from "axios";
import { useState, useEffect } from "react";
import { pipe } from "./FP";

const setApiArgument = (city) => {
    const API_BASE = 'https://ptx.transportdata.tw/MOTC/v2/Bus';
    const API = `${API_BASE}/Route/City/${city}?$top=30&$format=JSON`;
    return API;
}

const fetchAPI = async (API) => {
    let res = null;
    let isSuccess = false;
    await axios.get(API)
    .then((response)=>{
        res = response.data;
        isSuccess = true;
    })
    .catch((error)=>{
        console.alert(`fail to get api, ${error}`);
        isSuccess = false;
    });
    return {
        isSuccess,
        data: res,
    };
};

export const useFetchAPI = (locate)=>{
    const [ APIData, setAPIData ] = useState(null);
    const handler = pipe(
            setApiArgument,
            fetchAPI
        );

    useEffect(()=>{
        handler(locate).then((res)=>{
            if(res.isSuccess) setAPIData(res.data);
        });
    },[]);

    return APIData;
}

