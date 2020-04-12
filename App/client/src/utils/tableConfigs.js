/* eslint-disable */

const userTable = {
  displayAmount: 5,
  sortBy: 'createdAt',
  sortDesc: true,
  headers: [
    { text: 'UID', value: '_id', sortable: false },
    { text: 'Username', value: 'username', sortable: false },
    { text: 'Role', value: 'role', sortable: false },
    { text: 'Display name', value: 'displayName', sortable: false },
    { text: 'Profile picture URL', value: 'imageUrl', sortable: false },
    { text: 'Created at', value: 'createdAt', sortable: true },
  ],
};

const logTable = {
  displayAmount: 15,
  sortBy: 'createdAt',
  sortDesc: true,
  headers: [
    { text: 'Text', value: 'text', sortable: false },
    { text: 'Date', value: 'createdAt' },
  ],
};

const notificationTable = {
  headers: [
    { text: 'UID', value: '_id', sortable: false },
    { text: 'Text', value: 'text', sortable: false },
    { text: 'Type', value: 'type', sortable: false },
    { text: 'Date', value: 'createdAt', sortable: false },
  ],
};

export { userTable, logTable, notificationTable };
