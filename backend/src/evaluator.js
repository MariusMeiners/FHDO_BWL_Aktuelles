const RssParser = require("./rssParserFromFeed.js");
module.exports.evaluate = oldNewsItems => {
  const currentNewsObject = RssParser.getCurrentNewsObject();
  const newNewsItems = currentNewsObject.filter(e => !oldNewsItems.includes(e));
  return {
    allNewsItems: currentNewsObject,
    newNewsItems
  };
};
