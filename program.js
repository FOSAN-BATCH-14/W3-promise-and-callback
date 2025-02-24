const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}

function match_data(parent_file, children_file) {
  console.log("loading data parent.....");
  sleep(2000);
  fs.readFile(parent_file, 'utf8', (err, parentData) => {
    if (err) {
      console.error("Error reading parent file:", err);
      return;
    }
    
    const parents = JSON.parse(parentData);
    
    console.log("loading data children.....");
    sleep(2000);
    fs.readFile(children_file, 'utf8', (err, childrenData) => {
      if (err) {
        console.error("Error reading children file:", err);
        return;
      }
      
      const children = JSON.parse(childrenData);
      
      // Matching process
      parents.forEach(parent => {
        parent.children = children
          .filter(child => child.family === parent.last_name)
          .map(child => child.full_name);
      });
      
      console.log(JSON.stringify(parents, null, 2));
    });
  });
}

match_data('./parents.json', './children.json');
console.log("Notification : Data sedang diproses !");
