const fs = require("fs");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("loading data parent");
      console.log("loading data children");
      sleep(2000);
      let parent = JSON.parse(data);
      fs.readFile(children_file, "utf8", function (err, data) {
        if (err) {
          console.log(err);
        } else {
          let children = JSON.parse(data);
          parent.forEach((parent) => {
            parent.children = [];
            children.forEach((children) => {
              if (parent.last_name === children.family) {
                parent.children.push(children.full_name);
              }
            });
          });
          console.log(parent);
        }
      });
    }
  });
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
