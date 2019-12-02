import React from 'react';
import './App.css';
import {Line} from "react-chartjs-2";

const App = () => {

    const dataFromServer = [
        {studentCount: 200, year: 2018 , month: 1},
        {studentCount: 100, year: 2019, month: 2},
        {studentCount: 300, year: 2020, month: 3},
    ];

    const dataFromServer1 = [
        {studentCount: 500, year: 2018 , month: 1},
        {studentCount: 400, year: 2019, month: 2},
        {studentCount: 200, year: 2020, month: 3},
    ];

    const data = {
        datasets: [
            {
                data: dataFromServer.map(point => ({x: new Date(point.year, point.month), y: point.studentCount})),
                lineTension: 0
            },

            {
                data: dataFromServer1.map(point => ({x: new Date(point.year, point.month), y: point.studentCount})),
                lineTension: 0
            }
        ]
    };

    const options = {
        scales:
            {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'month'
                        }
                    }
                ],

                yAxes: [
                    {
                        ticks: {
                            min: 50
                        }
                    }
                ]
            }
    };


    return (
        <div className='App'>

                <Line data={data}
                      options={options}
                />


        </div>
    )
};

export default App;
