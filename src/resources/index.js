import axios from 'axios';
import fakeData from './fakeData.json';

const URL = 'https://www.homeq.se/api/v1/search/';
const VERSION = 'v1';

const mapper = data => {
	return data;
};

class Resource {
	constructor() {
		this._url = 'https://www.homeq.se/api/';
		this._version = 'v1/';
	}

	search(data) {
		const dataObj = mapper(data);
		const url = this._url + this._version + 'search/';

		// setting fakeResposneTime to 4 seconds to fake a request response time.
		const fakeResponseTime = 4000;

		return new Promise(resolve => {
			setTimeout(resolve.bind(null, fakeData.results), 0);
		});

		// this wont work because of CORS atm, so im faking it.
		// return axios.post(url, dataObj).then(response => {
		// 	return response;
		// });
	}
}

export default Resource;