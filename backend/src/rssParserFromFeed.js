let Parser = require("rss-parser");
let parser = new Parser();
const NewsItem = require("./NewsItem");

module.exports.getCurrentNewsObject = async () => {
  //get feed
  let feed = await parser.parseURL(process.env.RSS_FEED_URL);
  const lastBuildDate = feed.lastBuildDate;

  const news = [];
  //transform important data from feed to readable format
  feed.items.forEach(item => {
    const splitstring = item.title.split(":");
    const absender = splitstring[0]
    let titel;
    splitstring.length > 1 ? titel = splitstring[1].trim() : titel = ""
    const kategorien = item.categories;
    const nachricht = item.content.replace(/(\r\n|\n|\r)/gm, "");
    const newsItem = new NewsItem(absender, titel, nachricht, kategorien);
    news.push(newsItem)
  });

  return {
    lastBuildDate,
    news
  };
};
