const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_CAMPAIGNS_SUCCESS':
            return {...state, isFetching: action.isFetching, error: action.error, campaigns: action.campaigns};

        case 'LOAD_CAMPAIGNS_FETCHING':
            return {...state, isFetching: action.isFetching, error: action.error};

        case 'LOAD_CAMPAIGNS_ERROR':
            return {...state, isFetching: action.isFetching, error: action.error};

        case 'LOAD_CAMPAIGN_BY_ID_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.error,
                campaign: action.campaign,
                open: true
            };

        case 'LOAD_CAMPAIGN_BY_ID_FETCHING':
            return {...state, isFetching: action.isFetching, error: action.error};

        case 'LOAD_CAMPAIGN_BY_ID_ERROR':
            return {...state, isFetching: action.isFetching, error: action.error};

        case 'INIT_STATES':
            return {...state, open: false};

        case 'SET_CURRENT_USER':
            return {isAuthenticated: action.isAuthenticated};

        default:
            return state;
    }
};

export default reducer;