let Parser = require("rss-parser");
let parser = new Parser();

module.exports.getCurrentNewsObject = async () => {
  //get feed
  let feed = await parser.parseURL(process.env.RSS_FEED_URL);
  const lastBuildDate = feed.lastBuildDate;

  const news = [];
  //transform important data from feed to readable format
  feed.items.forEach(item => {
    // console.log(item);
    const dozent = item.title.split(":")[0];
    const kategorien = item.categories;
    const mitteilung = item.content;
    if (dozent != "Studienbüro") {
      news.push({
        dozent,
        kategorien,
        mitteilung
      });
    }
  });

  return {
    lastBuildDate,
    news
  };
};
