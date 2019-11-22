jest.mock("./rssParserFromFeed.js");
const RssParser = require("./rssParserFromFeed.js");
const evaluator = require("./evaluator.js");
const NewsItem = require("./NewsItem");

const expected = new NewsItem("Bornhorn");
RssParser.getCurrentNewsObject = () => [expected];

test("evaluates new item correctly given empty array", () => {
  expect(evaluator.evaluate([]).newNewsItems).toEqual([expected]);
});
