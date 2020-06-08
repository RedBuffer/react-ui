import Origin from './Input';
import TextArea from './TextArea';

type Type = typeof Origin;

interface Input extends Type {
  TextArea: typeof TextArea;
}

const Component: Input = Origin as Input;
Component.TextArea = TextArea;

export { default as TextArea } from './TextArea';

export default Component;
