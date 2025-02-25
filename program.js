const fs = require('fs');

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function match_data(parent_file, children_file) {
  let parentData;

  console.log('loading data parents...');
  try {
    const parentDataFile = await fs.promises.readFile(parent_file, 'utf-8');
    parentData = JSON.parse(parentDataFile);

    await sleep(2000);

    console.log('loading data children...');
    const childrenDataFile = await fs.promises.readFile(children_file, 'utf-8');
    let childrenData = JSON.parse(childrenDataFile);

    await sleep(2000);

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
  } catch (err) {
    console.log(err);
  }
}

match_data('./parents.json', './children.json');
console.log("Notification: Data sedang diproses!");
