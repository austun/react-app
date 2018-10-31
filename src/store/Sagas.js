import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/ActionTypes';
import {campaignService} from '../service/CampaignService';

function* fetchCampaigns() {
    try {
        const campaigns = yield call(campaignService.fetchCampaigns);

        yield put({
            type: actionTypes.LOAD_CAMPAIGNS_SUCCESS,
            isFetching: false,
            error: null,
            campaigns: campaigns.data,
        });
    } catch (error) {
        yield put({
            type: actionTypes.LOAD_CAMPAIGNS_ERROR,
            isFetching: false,
            error: error,
        });
    }
}

function* fetchCampaignById(action) {
    try {
        const campaign = yield call(campaignService.fetchCampaignById, action.id);

        yield put({
            type: actionTypes.LOAD_CAMPAIGN_BY_ID_SUCCESS,
            isFetching: false,
            error: null,
            campaign: campaign.data,
            open: true,
        });
    } catch (error) {
        yield put({
            type: actionTypes.LOAD_CAMPAIGN_BY_ID_ERROR,
            isFetching: false,
            error: error,
        });
    }
}

function* watchFetchCampaigns() {
    yield takeLatest(actionTypes.LOAD_CAMPAIGNS_FETCHING, fetchCampaigns);
}

function* watchFetchCampaignById() {
    yield takeLatest(actionTypes.LOAD_CAMPAIGN_BY_ID_FETCHING, fetchCampaignById);
}

export default function* rootSagas() {
    yield all([
        watchFetchCampaigns(),
        watchFetchCampaignById()
    ]);
}