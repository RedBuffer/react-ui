import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import Content from './Content';

type Type = typeof Layout;

interface ComponentInterface extends Type {
  Header: typeof Header;

  Footer: typeof Footer;

  Content: typeof Content;
}

const Component: ComponentInterface = Layout as ComponentInterface;

Component.Header = Header;
Component.Footer = Footer;
Component.Content = Content;

export default Component;
