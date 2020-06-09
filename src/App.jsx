import React from 'react';
import { Cards, Chart, CountryPicker } from './components/'
import styles from './App.module.scss'

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Corona</h1>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;