import React, {useEffect, useState} from 'react';
import '../styles/converter.css'
import { Form } from "react-bootstrap";



function Convertor(props) {

    const [tempInput, setTempInput] = useState(0);
    const [enteredHumidity, setEnteredHumidity] = useState(0);
    const [output, setOutput] = useState('');
    const [choices, setChoices] = useState("celsius");


    // Func , formulas  for calculating temp to F and vice versa
    const ftoC = (far) => {
        return (far - 32) * (5/9)

    }

    const ctoF = (c) => {
        return (c *  9/5) + 32
    }

    // Get typed value from temperature input field
    const getInputValue = (event) => {

        setTempInput(event.target.value)
    }

    const getHumidityValue = (event) => {

        setEnteredHumidity(event.target.value)
    }


    // Calclate Heat Index
    const calculateHiFromFah = (temp,hum) => {
        return -42.379 + 2.04901523*temp + 10.14333127*hum - .22475541*temp*hum - .00683783*temp*temp - .05481717*hum*hum + .00122874*temp*temp*hum + .00085282*temp*hum*hum - .00000199*temp*temp*hum*hum;
    }

    // Choice box state

    const makeChoice = (e) => {
      const selected = e.target.value
        setChoices(selected)
    }


    //Submit Handler with conditions
    const submidHandler = (event) => {
        event.preventDefault();

        if (choices === 'celsius' && enteredHumidity > 0 && tempInput > 26.7){
            let celsiusToF  = ctoF(tempInput)
            let calcHI = calculateHiFromFah(celsiusToF,enteredHumidity)
            let fromFtoC = ftoC(calcHI)
            setOutput("Temp F "+ calcHI.toFixed(2) +  " \n ,temp in C " + fromFtoC.toFixed(2))
        }


        else if (choices === 'fahre' && enteredHumidity > 0 && tempInput > 80){
            let calcHI = calculateHiFromFah(tempInput,enteredHumidity)
            let fromFtoC = ftoC(calcHI)
            setOutput("Temp F "+ calcHI.toFixed(2) +  " \n ,temp in C " + fromFtoC.toFixed(2))
        }

        else {
            setOutput("ERROR Cannot calculate, please enter F > 80 or C > 26.7 and  humidity > 0")
        }

    }



    return (
        <div className='convertor'>

           <h2 className='mt-3 mb-3'> {output}</h2>

                < form onSubmit={submidHandler}>
                <div className='convertor__controls'>
                <div className='convertor__control'>
                <label>Temperature</label>
                <input type="number"   onChange={getInputValue}/>
                </div>
                    <Form.Select aria-label="Default select example" onChange={makeChoice} className='convertor__control'>

                        <option value='celsius'>Celsius</option>
                        <option value='fahre'>Fahrenheit</option>

                    </Form.Select>

                <div className='convertor__control'>
                <label> Humidity %</label>
                <input type="number" onChange={getHumidityValue} />
                </div>

                </div>

                <div className='convertor__actions'>
                <button type='submit'>Calculate</button>
                </div>
                </form>

            </div>
    );
}

export default Convertor;