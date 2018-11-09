import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Navigation from '../src/components/Header/Navigation';

describe('Navigation', () => {
	it('should render', () => {
		const wrapper = shallow(<Navigation />);
		expect(wrapper.find('ul')).toHaveLength(1);
	});
});