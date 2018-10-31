import axios from 'axios';

export const campaignService = {
    fetchCampaigns,
    fetchCampaignById
};

let API_URL = 'http://localhost:8080/campaign/';

function fetchCampaigns() {
    const url = API_URL + 'all';
    return axios.get(url);
}

function fetchCampaignById(id) {
    const url = API_URL + id;
    return axios.get(url);
}