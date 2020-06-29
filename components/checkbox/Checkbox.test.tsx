import * as React from 'react';
import { mount } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  let handleChange;
  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn((e) => e.target.value);
    wrapper = mount(
      <Checkbox id={'checkbox'} onChange={handleChange}>
        checkbox
      </Checkbox>,
    );
  });

  it('should render correctly', () => {
    const component = wrapper;

    expect(component).toMatchSnapshot();
  });

  it('click on checkbox', () => {
    wrapper
      .find('#checkbox')
      .hostNodes()
      .simulate('change', { target: { checked: true } });

    expect(handleChange.mock.calls.length).toEqual(1);
    expect(handleChange.mock.calls[0][0].target.checked).toEqual(true);
  });

  it('click on disabled checkbox', () => {
    wrapper.setProps({ disabled: true });
    wrapper.find('#checkbox').hostNodes().simulate('click');

    expect(handleChange.mock.calls.length).toEqual(0);
  });
});
