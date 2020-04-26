/* eslint-disable camelcase */
import {
  required,
  alpha_spaces,
  alpha_num,
  confirmed,
  max,
  email,
  min,

} from 'vee-validate/dist/rules';

import { extend, setInteractionMode } from 'vee-validate';

setInteractionMode('aggressive');

extend('required', {
  ...required,
  message: '{_field_} can not be empty!',
});

extend('alpha_spaces', {
  ...alpha_spaces,
  message: '{_field_} may contain alphabetic characters or spaces.',
});

extend('alpha_num', {
  ...alpha_num,
  message: '{_field_} may only contain alphabetic characters or numbers.',
});

extend('confirmed', {
  ...confirmed,
  message: 'passwords must match',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

extend('min', {
  ...min,
  message: '{_field_} must be at least {length} characters',
});

export {
  required,
  alpha_spaces,
  alpha_num,
  confirmed,
  max,
  email,
  min,
};
