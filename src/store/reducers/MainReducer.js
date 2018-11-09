import Resource from '../../resources';

const API = new Resource();

export const initialState = {
	query: '',
	rent: [1000, 20000],
	rooms: [1, 8],
	area: [10, 300],
	fetching: false,
	list: []
};

const SEARCH = 'SEARCH';
const SET_DATA = 'SET_DATA';
const FETCH_LIST = 'FETCH_LIST';
const SET_LIST = 'SET_LIST';

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH:
			return {...state, query: action.value};
		case SET_DATA:
			return {...state, [action.key]: action.value};
		case FETCH_LIST:
			return {...state, fetching: action.value};
		case SET_LIST:
			return {...state, list: action.list};
		default:
			return state;
	}
};

export const doSearch = data => {
	return dispatch => {
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
