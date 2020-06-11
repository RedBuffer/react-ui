import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

type Type = typeof Breadcrumb;

interface ComponentInterface extends Type {
  item: typeof BreadcrumbItem;

  separator: typeof BreadcrumbSeparator;
}

const Component: ComponentInterface = Breadcrumb as ComponentInterface;
Component.item = BreadcrumbItem;
Component.separator = BreadcrumbSeparator;

export { default as Breadcrumb } from './Breadcrumb';
export { default as BreadcrumbItem } from './BreadcrumbItem';
export { default as BreadcrumbSeparator } from './BreadcrumbSeparator';

export default Component;
