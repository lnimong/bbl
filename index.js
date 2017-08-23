
let mainfunction = (data) => {

    console.log(data)
} 



fs = require('fs')
fs.readFile('./data.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  let persons = JSON.parse(data)
  let tree = [
      [0, 1, 2],
      [1, 3, 4],
      [2, 5, 6],
      [3, 7, 9],
      [6, 10, 11],
  ].map (nodeinfo => {
      let node = persons[nodeinfo[0]]
      node.teamMembers = persons.slice (nodeinfo[1], nodeinfo[2] + 1)
      node.id = nodeinfo[0]
      return node
  }) [0]

  mainfunction(tree)
});