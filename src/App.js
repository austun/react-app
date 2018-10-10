import React, { Component } from 'react';
import Campaigns from './components/Campaigns';
import './App.css';
import axios from "../node_modules/axios"

const API_URL = 'http://localhost:8080';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
        };
        this.getCampaigns = this.getCampaigns.bind(this);
    }

    componentDidMount() {
        this.getCampaigns();
    }

    render() {
        return <Campaigns data={this.state.campaigns}/>
    }

    getCampaigns() {
        const url = API_URL + '/campaign/all';

        axios.get(url)
            .then(obj => {
                console.log(obj.data);
                this.setState({
                    campaigns: obj.data,
                });
            })
    }
}

export default App;

