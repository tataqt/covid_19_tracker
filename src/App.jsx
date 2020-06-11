import React from 'react';
import { Cards, Chart, CountryPicker } from './components/';
import styles from './App.module.scss';
import { fetchData } from './api';
import coronaImage from './images/logo-covid.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });        
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt='covid19'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;