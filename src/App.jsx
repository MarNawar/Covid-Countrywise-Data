import { useEffect, useState } from "react"
import Data from './Data.jsx'
import Input from './Input.jsx'

export default function App() {
  const [country, setCountry] = useState("India");
  const [data, setData] = useState([]);
  
  async function logMovies() {
    const response = await 
    fetch("https://disease.sh/v3/covid-19/countries");
    const output = await response.json();
    setData(output);
  }
  
  useEffect(()=>{
    logMovies();
  },[]);
  
  return (
    <main>
      <Input setCountry={setCountry}/>
      <Data country = {
        data.filter((cntry)=>{
          if(cntry.country === country) 
            return true;
        }
      )}/>
    </main>
  )
}
