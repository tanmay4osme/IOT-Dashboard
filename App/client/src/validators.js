/*eslint-disable*/
export const notEmptyRules = [(value) => !!value || 'This field cannot be empty.'];
export const confirmPasswordRules = [
  (confirmPassword) => confirmPassword === vm.user.password || 'Password must match.',
];
