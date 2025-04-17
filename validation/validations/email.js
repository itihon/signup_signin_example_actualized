import { Validation } from 'isomorphic-validation';
import isMaxLength from '../predicates/is-max-length.js';
import isEmail from '../predicates/is-email.js';

const emailV = Validation()
  .constraint(isEmail)
  .constraint(isMaxLength(64));

export default emailV;