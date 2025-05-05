import { Predicate } from 'isomorphic-validation';

// registered e-mail: emily.johnson@x.dummyjson.com
const isEmailNotRegistered = (value) => fetch(
  `https://dummyjson.com/users/filter?key=email&value=${value}`
).then(res => res.json()).then(res => res.total === 0);

export default Predicate(
  isEmailNotRegistered, 
  {
    err: 'The E-mail must not be already registered.',
    waitMsg: 'Wait a moment, we are checking your E-mail.',
  }
);
