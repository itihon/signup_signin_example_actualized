import { Predicate } from 'isomorphic-validation';

const areTwoEqual = (value1, value2) => value1 === value2;

export default Predicate(
  areTwoEqual, 
  { 
    err: 'Password and password confirmation must be the same',
  }
);