import Resource from '../../resources';

const API = new Resource();

export const initialState = {
	query: '',
	rent: [1000, 20000],
	rooms: [1, 8],
	area: [10, 300],
	fetching: false,
	searchStarted: false,
	mobileMenuOpen: false,
	list: []
};

const SEARCH = 'SEARCH';
const SET_DATA = 'SET_DATA';
const FETCH_LIST = 'FETCH_LIST';
const SET_LIST = 'SET_LIST';
const START_FETCH = 'START_FETCH';

const OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU';
const CLOSE_MOBILE_MENU = 'CLOSE_MOBILE_MENU';

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH:
			return {...state, query: action.value};
		case SET_DATA:
			return {...state, [action.key]: action.value};
		case FETCH_LIST:
			return {...state, fetching: action.value};
		case START_FETCH:
			return {...state, searchStarted: action.value};
		case OPEN_MOBILE_MENU:
			return {...state, mobileMenuOpen: true};
		case CLOSE_MOBILE_MENU:
			return {...state, mobileMenuOpen: false};
		case SET_LIST:
			return {...state, list: action.list};
		default:
			return state;
	}
};

// export const toggleMobileMenu = () => {
// 	return (dispatch, getState) => {
// 		const {mobileMenuOpen} = getState().MainReducer;
// 	}
// };

export const openMobileMenu = () => {
	return dispatch => {
		dispatch({ type: OPEN_MOBILE_MENU });
	}
};

export const closeMobileMenu = () => {
	return dispatch => {
		dispatch({ type: CLOSE_MOBILE_MENU });
	}
};

export const doSearch = data => {
	return dispatch => {
		dispatch({ type: START_FETCH, value: true });
		dispatch({ type: FETCH_LIST, value: true });

		API.search(data).then(list => {
			dispatch({ type: SET_LIST, list });
			dispatch({ type: FETCH_LIST, value: false });
		});
	}
}

export const setData = (value, key) => {
	return dispatch => {
		dispatch({ type: SET_DATA, key, value })
	}
}

export default reducer;
