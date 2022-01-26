import React from 'react';
import  '../styles/dateForm.css'

function InputDate(props) {



    // Func reacting on every single key pressed on keyboard , storing into variable formating to readable /url
    // and  storing data to global variable
    const dateChanger = (event) => {

        const url = "https://www.metaweather.com/api/location/44418"
        var date = event.target.value
        var year =`${url}/${date[0]}${date[1]}${date[2]}${date[3]}/${date[5]}${date[6]}/${date[8]}${date[9]}/`
        console.log(year)
        finalYear = year

    }




    // On submit func will send data via props to parent copmponent
    let finalYear

    const submitDateHandler = (event) => {

        props.getDataFromChild(finalYear)
        event.preventDefault();

    }


    return (

        <div>
            <div >
                <label> <h4>Search by datetime</h4> </label>

                <form onSubmit={submitDateHandler} >
                    <input type="date" onChange={dateChanger} />
                    <button type='submit' className="button-55" role="button"> Search</button>
                </form>
            </div>
        </div>

    );
}

export default InputDate;