import axios from "axios";

const TaiChungOpenData = axios.create({
  baseURL: 'https://datacenter.taichung.gov.tw/swagger/OpenData'
});

const BusData = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus'
});

// const MockBusData = axios.create({
//   baseURL: './'
// });

export const TaichungRoadConstructionData = () => (TaiChungOpenData.get('/863064b3-7678-437e-9161-8dcda3d95ab7'));
export const busMotion = ( city, routeNumber ) => (
  ()=>BusData.get(`/RealTimeByFrequency/City/${city}/${routeNumber}?$format=JSON`)
);
export const busRoute = ( city ) => (
  ()=>BusData.get(`/Route/City/${city}?$format=JSON`)
);
export const busOperator = ( city ) => (
  ()=>BusData.get(`/Operator/City/${city}?$format=JSON`)
);
