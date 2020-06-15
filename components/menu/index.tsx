import Item from './Item';
import Origin from './Menu';

type Type = typeof Origin;

export interface Menu extends Type {
  Item: typeof Item;
}

const Component: Menu = Origin as Menu;

Component.Item = Item;

export { default as Menu } from './Menu';
export { default as Item } from './Item';

export default Component;
