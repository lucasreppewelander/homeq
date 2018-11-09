import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {NavLink} from '../src/components/Header/Navigation';

describe('NavLink', () => {
	it('should render', () => {
		const wrapper = shallow(<NavLink text={'Lucas'} href={'/lucas'} />);
		expect(wrapper.find('li')).toHaveLength(1);
	});
});