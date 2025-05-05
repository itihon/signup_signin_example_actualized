import { Validation } from 'isomorphic-validation';
import isEmail from '../predicates/is-email.js';
import isMinLength from '../predicates/is-min-length.js';
import isMaxLength from '../predicates/is-max-length.js';

const emailV = Validation()
  .constraint(isMinLength(8), { next: false })
  .constraint(isMaxLength(48), { next: false })
  .constraint(isEmail, { next: false });

export default emailV;