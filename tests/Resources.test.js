import Resource from '../src/resources';

describe('Resources', () => {
	it('should be able to create instance', () => {
		const API = new Resource();
		expect(API.search).toBeDefined();
	});
})