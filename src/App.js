import { useEffect, useState } from 'react';
import { Kanban } from '../src/components/Kanban';
import Header from './components/Header';
import './App.css';
import { User } from '../src/components/User';
import { Priority } from '../src/components/Priority';
import { GETAPI } from '../src/api';

function App() {

  const [APIDATA, SETAPIDATA] = useState([])

  const [displayType, setdisplayType] = useState(sessionStorage["TaskMenu"])
  const handledataToDisplay = (value) => {
    setdisplayType(value)
    sessionStorage.setItem('TaskMenu', value)
  }

  useEffect(() => {
    GETAPI('/v1/internal/frontend-assignment').then((data) => {
      SETAPIDATA(data)
    })
  }, [])

  return (
    <>
      <Header DataVisible={handledataToDisplay} />
      {
        APIDATA.length !== 0 ? (displayType === 'user' ? <User apidata={APIDATA} /> :
          displayType === 'priority' ? <Priority apidata={APIDATA} /> :
            <Kanban apidata={APIDATA} />) : ''
      }

    </>
  );
}

export default App;
