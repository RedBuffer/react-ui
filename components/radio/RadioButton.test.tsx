import * as React from 'react';
import { mount } from 'enzyme';

import RadioButton from './RadioButton';

describe('Radio Button', () => {
  let handleChange;
  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn((e) => e.target.value);
    wrapper = mount(
      <RadioButton name="radio-test" id={'radio'} onChange={handleChange}>
        radio
      </RadioButton>,
    );
  });

  it('should render correctly', () => {
    const component = wrapper;

    expect(component).toMatchSnapshot();
  });

  it('click on radio button', () => {
    wrapper
      .find('#radio')
      .hostNodes()
      .simulate('change', { target: { checked: true } });

    expect(handleChange.mock.calls.length).toEqual(1);
    expect(handleChange.mock.calls[0][0].target.checked).toEqual(true);
  });

  it('click on disabled checkbox', () => {
    wrapper.setProps({ disabled: true });
    wrapper.find('#radio').hostNodes().simulate('click');

    expect(handleChange.mock.calls.length).toEqual(0);
  });
});
