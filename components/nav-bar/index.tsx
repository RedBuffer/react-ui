import Item from './Item';
import Origin from './Nav';
import Brand from './Brand';
import SubMenu from './SubMenu';
import ItemGroup from './ItemGroup';

type Type = typeof Origin;

interface Nav extends Type {
  Item: typeof Item;
  Brand: typeof Brand;
  SubMenu: typeof SubMenu;
  ItemGroup: typeof ItemGroup;
}

const Component: Nav = Origin as Nav;
Component.Item = Item;
Component.Brand = Brand;
Component.SubMenu = SubMenu;
Component.ItemGroup = ItemGroup;

export { default as Item } from './Item';
export { default as Brand } from './Brand';
export { default as SubMenu } from './SubMenu';
export { default as ItemGroup } from './ItemGroup';

export default Component;
