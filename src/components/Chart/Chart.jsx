import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.scss'

const Chart = () => {
    const [daileData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        daileData?.length ? (<Line
            data={{
                labels: daileData.map(({date}) => date),
                datasets: [{
                    data: daileData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: daileData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill: true
                }]
            }}
        />) : null
    );

    return (
        <div className={styles.container}>
           {lineChart}
        </div>
    );
};

export default Chart;