import feathersVuex from './feathersVuex';

const {makeAuthPlugin} = feathersVuex;

export default makeAuthPlugin({userService: 'users'});
