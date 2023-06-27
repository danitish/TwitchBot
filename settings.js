require("dotenv").config();
const { CHANNEL, USERNAME, PASSWORD } = process.env;

module.exports = {
  channel: CHANNEL,
  username: USERNAME,
  password: PASSWORD,
};
