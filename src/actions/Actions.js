import * as types from './ActionTypes';

export function loadCampaignsSuccess(campaigns) {
    console.log(campaigns);
    return {type: types.LOAD_CAMPAIGNS_SUCCESS, isFetching: false, error: null, campaigns: campaigns}
}

export function loadCampaignsFetching() {
    return {type: types.LOAD_CAMPAIGNS_FETCHING, isFetching: true, error: null}
}

export function loadCampaignsError(error) {
    return {type: types.LOAD_CAMPAIGNS_ERROR, isFetching: false, error: error}
}

export function loadCampaignByIdFetching(id) {
    return {type: types.LOAD_CAMPAIGN_BY_ID_FETCHING, isFetching: true, error: null, id: id}
}

export function loadCampaignByIdSuccess(campaign) {
    return {type: types.LOAD_CAMPAIGN_BY_ID_SUCCESS, isFetching: true, error: null, campaign: campaign}
}

export function loadCampaignByIdError(error) {
    return {type: types.LOAD_CAMPAIGN_BY_ID_ERROR, isFetching: false, error: error}
}

export const loadCampaigns = () => (loadCampaignsFetching());
export const loadCampaignById = (id) => (loadCampaignByIdFetching(id));

export const initStates = () => {
    return {type: types.INIT_STATES, open:false}
};

export const loginSuccess = () => {
    return {type: types.SET_CURRENT_USER, isAuthenticated: true}
};

export const logout = () => {
    return {type: types.SET_CURRENT_USER, isAuthenticated: false}
};
