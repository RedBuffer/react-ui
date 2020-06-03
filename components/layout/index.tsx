import Header from './Header';
import Footer from './Footer';
import Origin from './Layout';
import Content from './Content';

type Type = typeof Origin;

interface Layout extends Type {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
}

const Component: Layout = Origin as Layout;
Component.Header = Header;
Component.Footer = Footer;
Component.Content = Content;

export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Layout } from './Layout';
export { default as Content } from './Content';

export default Component;
