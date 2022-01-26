import React,{useState,useEffect} from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid'
import {Container, Grid, ListItem} from "@material-ui/core";
import InputDate from "./InputDate";
import LineChart from "./LineChart";


function WeatherTable() {

    const columns = [
        { field: 'id', headerName: 'id', width: 150, },
        { field: 'applicable_date', headerName: 'Date Time', width: 200 ,type: 'dateTime',
            format: value => new Date(value).toLocaleDateString()},
        { field: 'created', headerName: 'Created', width: 200,type: 'dateTime', valueGetter: ({ value }) => value && new Date(value),
        },
        {
            field: 'weather_state_name',
            headerName: 'Weather',
            width: 150,
        },
        { field: 'the_temp', headerName: 'Temperature', width: 200,valueGetter: ({ value }) => value.toFixed(2)},
        { field: 'air_pressure', headerName: 'Presure', width: 130, valueGetter: ({ value }) => value.toFixed(2)},
        { field: 'humidity', headerName: 'Humidity', width: 150, },

    ];


    const [posts, setPosts] = useState([]);
    const [fetchedDate, setFetchedDate] = useState("/2018/04/30/");


    // Get Data from API by every single page load
    useEffect( () =>{
        const  fetchData = async () =>{
            await axios.get(fetchedDate)
                .then(response => {
                    //     console.log(response.data);
                    setPosts(response.data)
                });

        }

        fetchData()

    }, [fetchedDate])





    //Filtering wind direction only from North west...
    const filterDirection =  posts.filter(
        post => post.wind_direction_compass === "N" );
    console.log(filterDirection)



    // Receive data from child comp and fire up function
    const getDataFromChild = (data) => {
        setFetchedDate(data)
    }







    return (
        <div className='mt-5'>

            <div className='mb-5'>
                <InputDate  getDataFromChild={getDataFromChild} />
            </div>

            <Grid container>
                <Grid item md={6} xs={12}>
                    <ListItem>
                        <Container fixed style={{ height: 800, width: '100%' }}>

                            <DataGrid
                                rows={filterDirection}
                                columns={columns}
                                pageSize={15}
                                rowsPerPageOptions={[15]}
                                checkboxSelection
                            /></Container>
                    </ListItem>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ListItem>
                        <Container fixed>
                            <LineChart data={filterDirection}/>
                        </Container>
                    </ListItem>
                </Grid>

            </Grid>

        </div>
    );
}

export default WeatherTable;