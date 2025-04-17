import { Validation } from 'isomorphic-validation';
import emailV from '../validations/email.js';
import passwordV from '../validations/password.js';
import isPasswordConfirmed from '../predicates/is-password-confirmed.js';
import applyEffects from '../ui/apply-effects.js';

const pwdConfirm = Validation();

/** Creating profiles */

const [signupForm, signupV] = Validation.profile(
  '[name="signupForm"]',
  ['email', 'password', 'pwdConfirm'],
  [emailV, passwordV, pwdConfirm],
);

Validation.glue(signupV.password, signupV.pwdConfirm)
  .constraint(isPasswordConfirmed);

  /** UI effects */

applyEffects([signupForm, signupV]);

export { signupForm, signupV };
