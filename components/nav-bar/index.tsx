import Origin from './Nav';
import Brand from './Brand';
import ItemGroup from './ItemGroup';

type Type = typeof Origin;

interface Nav extends Type {
  Brand: typeof Brand;
  ItemGroup: typeof ItemGroup;
}

const Component: Nav = Origin as Nav;
Component.Brand = Brand;
Component.ItemGroup = ItemGroup;

export { default as Brand } from './Brand';
export { default as ItemGroup } from './ItemGroup';

export default Component;
