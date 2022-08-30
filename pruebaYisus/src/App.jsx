import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [apiInfo, setApiInfo] = useState()


  useEffect(() => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&APPID=5f961bf11bc80bee3a05cb5da85cad2a'
    axios.get(URL)
      .then((res)=> setApiInfo(res.data))
      .catch((err)=>console.log(err))

  }, [])
  

  return (
    <div className="App">
      <div>
        <h3>CIUDAD:{apiInfo?.name}</h3>
        <h5>AGUA:{apiInfo?.weather[0].main}</h5>
        <h5>TEMPERATURA:{apiInfo?.main.temp} CELCIUS </h5>
        <div>
        <h5>MIN:{apiInfo?.main.temp_min} CELCIUS </h5>
        <h5>MAX:{apiInfo?.main.temp_max} CELCIUS </h5>
        </div>
      </div>
    </div>
  )
}

export default App
