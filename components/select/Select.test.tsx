import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Select from './Select';
import Option from './Option';

describe('Select', () => {
  let wrapper;
  let handleChange;

  beforeEach(() => {
    handleChange = jest.fn((event) => event.target.value);
    wrapper = mount(
      <Select onChange={handleChange}>
        <Option value={'option 1'}>Option 1</Option>
        <Option id={'option-2'} value={'option 2'}>
          Option 2
        </Option>
        <Option id={'option-3'} value={'option 3'}>
          Option 3
        </Option>
        <Option id={'option-4'} value={'option 4'}>
          Option 4
        </Option>
      </Select>,
    );
  });

  it('should render correctly', () => {
    const component = shallow(<Select />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with options', () => {
    const component = wrapper;

    expect(component).toMatchSnapshot();
  });

  it('select option 1 in select', () => {
    wrapper
      .find('select')
      .simulate('change', { target: { value: 'option 2' } });

    expect(handleChange.mock.calls.length).toBe(1);
  });
});
