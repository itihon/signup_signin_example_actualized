import { Validation } from 'isomorphic-validation';
import isStrongPassword from '../predicates/is-strong-password.js';

const passwordV = Validation()
  .constraint(isStrongPassword);

export default passwordV;