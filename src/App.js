import logo from './logo.svg';
import './App.css';
import useGetAPIData from './utils/useGetAPIData';
import * as api from './static/api'

const apiList = [ 
  api.busMotion('Taichung', '105'),
  api.busMotion('Taichung', '93'),
  api.busRoute('Taichung'),
  api.busOperator('Taichung'),
  api.busRoute('Taipei'),
  api.busOperator('Taipei'),
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
