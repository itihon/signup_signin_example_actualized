import { Predicate } from 'isomorphic-validation';
import isLength from 'validator/es/lib/isLength';

const isMaxLength = (max) => Predicate(
  (value) => isLength(value, { max }),
  {
    err: `Must be no longer than ${max} characters.`
  }
);

export default isMaxLength;