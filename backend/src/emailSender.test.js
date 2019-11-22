const emailSender = require("./emailSender");
const NewsItem = require("./NewsItem");

test("correctly sends email given a NewsItem - requires network", async () => {
  const newsItem = new NewsItem(
    "Greiber",
    "Neue Prüfungsordnung",
    "Leider gibt es eine neue Prüfungsordnung",
    ["Nachricht"]
  );

  const info = await emailSender.sendMail(newsItem);
  console.log(info);
});
