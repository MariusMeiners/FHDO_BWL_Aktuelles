const EmailSender = require("./emailSender.js");
const RssParser = require("./rssParserFromFeed.js");
const DB = require("./db.js");
require("dotenv").config();

const mainLoop = async () => {
  const currentNewsObject = await RssParser.getCurrentNewsObject();
  // console.log(currentNewsObject);
  // EmailSender.sendMail();
  // DB.connect();
};

mainLoop();

// main loop
// setInterval(mainLoop, 15000);
