const EmailSender = require("./emailSender.js");
const evaluator = require("./evaluator");

const oldNewsObjects = evaluator.evaluate([]).allNewsItems;

const mainLoop = () => {
  const newNewsItems = evaluator.evaluate(oldNewsObjects).newNewsItems;
  console.log(newItems);
  if (newNewsItems) {
    newNewsItems.forEach(EmailSender.sendMail);
  }
};

// main loop
setInterval(mainLoop, 15000);
