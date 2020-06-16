import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Divider from './Divider';

describe('Divider', () => {
  it('should render correctly', () => {
    const component = shallow(<Divider />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with text', () => {
    const component = shallow(<Divider>TEXT</Divider>);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const component = mount(
      <Divider>
        <button>CHILDREN</button>
      </Divider>,
    );

    expect(component).toMatchSnapshot();
  });
});
