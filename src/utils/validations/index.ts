import { isEmpty } from 'lodash';

const isNotEmpty = (value?: any) => !isEmpty(value);

export { isNotEmpty, isEmpty };
