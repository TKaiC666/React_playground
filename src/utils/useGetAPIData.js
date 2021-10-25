import { useState, useEffect } from "react";

const fetchingAPI = async ( apiPromise )=>{
    let apiPromiseResult = null;
    // let isSuccess = false;
    await apiPromise()
    .then((res)=>{
        apiPromiseResult = res.data;
        // isSuccess = true;
    })
    .catch((error)=>{
        console.error(`Fail to get API, ${error}`);
        // isSuccess = false;
    });
    return apiPromiseResult;
}

const useGetAPIData = ( apiList )=>{
    const [ apiResult, setApiResult ] = useState({
      isLoading: true,
      data: null  
    });
    useEffect(()=>{
      Promise.all(apiList.map((api)=>fetchingAPI(api))).then((res)=>{
        setApiResult({
          isLoading: false,
          data: res,
        });
      })
    },[]);
    return apiResult;
}

export default useGetAPIData;