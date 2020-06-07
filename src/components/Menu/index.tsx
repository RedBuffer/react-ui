import Menu from './Menu';
import MenuItem from './MenuItem';

type Type = typeof Menu;

export interface ComponentInterface extends Type {
  MenuItem: typeof MenuItem;
}

const Component: ComponentInterface = Menu as ComponentInterface;

Component.MenuItem = MenuItem;

export default Component;
