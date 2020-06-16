import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Breadcrumb, BreadcrumbItem } from './index';

describe('Breadcrumb', () => {
  it('should render correctly', () => {
    const component = shallow(<Breadcrumb />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with BreadcrumbItem', () => {
    const component = mount(
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">crumb 1</a>
        </BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with BreadcrumbItem and string separator', () => {
    const component = mount(
      <Breadcrumb separator={'///'}>
        <BreadcrumbItem>
          <a href="#">crumb 1</a>
        </BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(component).toMatchSnapshot();
  });
});
