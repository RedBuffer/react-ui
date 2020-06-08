import Link from './Link';
import Text from './Text';
import Title from './Title';
import Origin from './Typography';
import Paragraph from './Paragraph';

type Type = typeof Origin;

interface Typography extends Type {
  Link: typeof Link;
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
}

const Component: Typography = Origin as Typography;
Component.Link = Link;
Component.Text = Text;
Component.Title = Title;
Component.Paragraph = Paragraph;

export { default as Link } from './Link';
export { default as Text } from './Text';
export { default as Title } from './Title';
export { default as Paragraph } from './Paragraph';

export default Component;
