const tokens = [
  {
    token: "TOKEN1",
    channelIds: ["CHANNEL1"], // MULTIPLE CHANNEL IDS CAN BE ADDED (OPTIONAL)
  },
  {
    token: "TOKEN2",
    channelIds: ["CHANNEL1"], // MULTIPLE CHANNEL IDS CAN BE ADDED (OPTIONAL)
  },
];

// token.js
module.exports = {
  TOKEN: process.env.TOKENS,
};