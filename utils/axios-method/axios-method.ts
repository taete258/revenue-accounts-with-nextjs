import axiosRetry from 'axios-retry';
import axios from 'axios';

axiosRetry(axios, { retries: 3, retryDelay:()=>200 } );
export const axiosGet = ({endPoint}:{endPoint:string}) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}${endPoint}`).then(res => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    return {data:res.data,status:res.status,statusText:res.statusText}
}) 
  