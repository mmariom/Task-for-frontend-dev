import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css'




function LineChart(props) {



    const data = {
        // Get data via props from WeatherTable
        labels:    props.data.map(x => new Date(x.created).toLocaleTimeString()),
        datasets: [
            {
                label: "Temperature C",
                data: props.data.map(x => x.the_temp.toFixed(2)),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },

        ]
    };

    // console.log("Toto je props data v linechart")
    // console.log(props.data.map(x => x.the_temp.toFixed(2)))

    const legend = {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#323130",
            fontSize: 14
        }
    };

    const options = {
        title: {
            display: true,
            text: "Temperature during day"
        },
        scales: {
            yAxes: [

                {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }
            ]
        },
        maintainAspectRatio: false

    };

    return (
        <div className='canvas-container'>
            <Line data={data} legend={legend} options={options}  />

        </div>
    );
}

export default LineChart;