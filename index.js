const tmi = require("tmi.js");
const { username, password, channel } = require("./settings.js");

const options = {
  options: { debug: true },
  connections: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username,
    password,
  },
  channels: [channel],
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on("connected", () => {
  client.say(channel, "Vital I am HERE");
});

client.on("message", (channel, user, message, self) => {
  if (self) return;
  if (message === "!vital") {
    client.say(channel, `${user.username}, stfu vital is #1`);
  }
  if (message === "hello") {
    client.say(channel, `${user.username}, hello, welcome!`);
  }
});
