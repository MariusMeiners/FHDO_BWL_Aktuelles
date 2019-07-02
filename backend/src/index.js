const EmailSender = require("./emailSender.js");
const RssParser = require("./rssParserFromFeed.js");
require("dotenv").config();

const mainLoop = async () => {
  const currentNewsObject = await RssParser.getCurrentNewsObject();
  console.log(currentNewsObject);
  // EmailSender.sendMail();
};

mainLoop();

//main loop
// setInterval(mainLoop, 15000);
