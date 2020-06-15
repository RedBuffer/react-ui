import Option from './Option';
import Origin from './Select';

type Type = typeof Origin;

export interface Select extends Type {
  Option: typeof Option;
}

const Component: Select = Origin as Select;

Component.Option = Option;

export { default as Select } from './Select';
export { default as Option } from './Option';

export default Component;
