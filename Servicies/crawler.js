const Crawler = require("simplecrawler");

const crawler = new Crawler("https://twitter.com/");
console.log("me");
crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

crawler.start();