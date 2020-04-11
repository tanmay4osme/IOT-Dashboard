const users = require('./users/users.service.js');
const activities = require('./activities/activities.service.js');
const notifications = require('./notifications/notifications.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(activities);
  app.configure(notifications);
};
