/* eslint-disable */
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
    { text: 'Status', value: 'status', sortable: false },
    { text: 'Type', value: 'type', sortable: false },
    { text: 'Date', value: 'createdAt', sortable: false },
    { text: 'Toggle Status', value: 'actions', sortable: false },
  ],
};

export { logTable, notificationTable };
