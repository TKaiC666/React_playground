import logo from './logo.svg';
import './App.css';
import useGetAPIData from './utils/useGetAPIData';
import * as api from './api/api'

const apiList = [ 
  api.busMotion('Taichung', '105'),
  api.busRoute('Taichung'),
  api.busRoute('Taipei'),
  api.busOperator('Taichung'),
  // api.TaichungRoadConstructionData,
];

function App() {
  const { isLoading, data } = useGetAPIData(apiList);
  if( isLoading ) return(<div>loading...</div>);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {
            data.map((item)=>(
              <li>{ !item ? 'no data' : 'got data' }</li>
            ))
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
