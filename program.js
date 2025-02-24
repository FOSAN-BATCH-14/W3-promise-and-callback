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
  // Code here
  let parentData;

  console.log('loading data children.....')
  fs.readFile(parent_file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }

    parentData = JSON.parse(data);

    sleep(2000);

    console.log('loading data children.....');
    fs.readFile(children_file, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }

      let childrenData = JSON.parse(data);

      sleep(2000);

      for (let i = 0; i < parentData.length; i++) {
        let parent = parentData[i];

        let matchingData = [];
        for (let j = 0; j < childrenData.length; j++) {
          let child = childrenData[j];
          if (parent.last_name === child.family) {
            matchingData.push(child.full_name);
          }
        }
        parent.children = matchingData;
      }

      console.log(parentData);
    });
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
