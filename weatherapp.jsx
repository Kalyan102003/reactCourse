import React,{useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Weatherapp() {
    const [city,setCity] = useState('')
    const [result,setResult] = useState("");

    const onChangehandler =(e)=> {
       setCity(e.target.value)
    }

    const onSubmithandler = (e)=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=> response.json()).then(
              data => {
                const kelvin = data.main.temp;
                const celcius = kelvin - 273.15;
                setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
              }
            ).catch(error => console.log(error))
            setCity("")
    }
  return (

<>
<center>
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>
                Weatherapp
            </h4>
            <form onSubmit={onSubmithandler}>
            <input size="30" type="text" name="city" onChange={onChangehandler} value={city}/> <br /><br />
                <input type='submit' value="get temprature">
                </input>
            </form> <br /> <br />
            <div>
               <h1>{result}</h1> 
            </div>

        </div>

    </div>
    </center>
</>
  );
}

export default Weatherapp;
