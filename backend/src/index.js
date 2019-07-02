let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL(
    "http://www.wirtschaft.fh-dortmund.de/netzinfo/owa/rss_aktuelles_std?STDGANG=900"
  );

  const news = [];
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

  console.log(news);
})();
