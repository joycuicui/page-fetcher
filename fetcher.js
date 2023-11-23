const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

const fetcher = function (url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Error:", error);
    } else {
      fs.writeFile(localPath, body, (err) => {
        if (err) {
          console.log("Error:", err);
        } else {
          const fileSize = body.length;
          console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
        }
      });
    }
  });
};

fetcher(url, localPath);
// node fetcher.js https://example.edu/ ./downloadedContent.html
