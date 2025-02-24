const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
function match_data(parent_file, children_file) {

  fs.readFile(parent_file, 'utf8', (err, parentData) => {
    if (err) {
      console.error(err);
    } console.log("loading data parent.....");
    sleep(2000);

    fs.readFile(children_file, 'utf8', (err, childrenData) => {
      if (err) {
        console.error(err);
      } console.log("loading data children.....");
      sleep(2000);

      let parents = JSON.parse(parentData);
      let children = JSON.parse(childrenData);

      for (let j = 0; j < parents.length; j++) {
        parents[j].children = [];

        for (let k = 0; k < children.length; k++) {
          if (children[k].family === parents[j].last_name) {
            parents[j].children.push(children[k].full_name);
          }
        }
      }

      console.log(parents);
    });
  });
}

match_data('./parents.json', './children.json');
console.log("Notification : Data sedang diproses !");