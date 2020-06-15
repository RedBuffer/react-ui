import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  let handleClick;
  let wrapper;
  const callHandleEdit = (item) => (e) => {
    e.stopPropagation();
    handleClick(item);
  };

  beforeEach(() => {
    handleClick = jest.fn((item) => item);
    wrapper = mount(
      <Dropdown
        overlay={
          <ul>
            <li>
              <a id="item-1" onClick={callHandleEdit('item 1')}>
                Item 1
              </a>
            </li>
            <li>
              <a id="item-2" onClick={callHandleEdit('item 2')}>
                Item 2
              </a>
            </li>
            <li>
              <a id="item-3" onClick={callHandleEdit('item 3')}>
                Item 3
              </a>
            </li>
          </ul>
        }
      >
        <span>dropdown</span>
      </Dropdown>,
    );
  });

  it('should render correctly', () => {
    const component = shallow(
      <Dropdown overlay={<></>}>
        <span>dropdown</span>
      </Dropdown>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with menu', () => {
    const component = wrapper;

    expect(component).toMatchSnapshot();
  });

  it('click on menu item 1 when trigger is "hover"', () => {
    wrapper.simulate('mouseenter');
    wrapper.find('#item-1').hostNodes().simulate('click');

    expect(handleClick.mock.calls[0][0]).toBe('item 1');
  });

  it('click on menu item 1 when trigger is "click"', () => {
    wrapper.setProps({ trigger: 'click' });
    wrapper.find('.react-ui-dropdown').hostNodes().simulate('click');
    wrapper.find('#item-1').hostNodes().simulate('click');

    expect(handleClick.mock.calls[0][0]).toBe('item 1');
  });
});
