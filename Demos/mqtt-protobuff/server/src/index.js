const { app } = require("./app");
const broker = require("./broker");

const PORT = process.env.PORT || 5000;
const BROKER_PORT = process.env.BROKER_PORT || 5001;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${PORT}`);
  /* eslint-enable no-console */
});

broker.listen(BROKER_PORT, () => {
  console.log(`Broker listening on port: ${BROKER_PORT}`);
});
