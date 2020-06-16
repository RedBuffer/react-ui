import Item from './Item';
import Origin from './Breadcrumb';
import Separator from './Separator';

type Type = typeof Origin;

interface ComponentInterface extends Type {
  Item: typeof Item;
  Separator: typeof Separator;
}

const Component: ComponentInterface = Origin as ComponentInterface;

Component.Item = Item;
Component.Separator = Separator;

export { default as BreadcrumbItem } from './Item';
export { default as Breadcrumb } from './Breadcrumb';
export { default as BreadcrumbSeparator } from './Separator';

export default Component;
