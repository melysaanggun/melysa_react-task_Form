import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const dataKosong = {
    nama:"",
    email:"",
    noHp:"",
    pendidikan:"",
    kelas:"",
    harapan:""
  }

  const [data, setData] = useState(dataKosong)

  return (
    <div className="App">
      <Form dataVal={data}/>
    </div>
  );
}

export default App;
