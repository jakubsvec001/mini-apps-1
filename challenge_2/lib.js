var sampleData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
}

const convertJsonToCsv = (json, filter=null) => {
  console.log(json.firstName)
  let csv = [['uuid', ...Object.keys(json).slice(0, -1)]]
  let uuid = 0;
  const recurseJson = (node) => {
    let rowBuild = [uuid]
    let filteredFlag = false;
    for (let key in node){
      if (node[key] && key !== 'children'){
        rowBuild.push(node[key]);
      } else if (key !== 'children'){
        rowBuild.push(null)
      }
    }
    if (!filteredFlag){
      uuid++;
    }
    csv.push(rowBuild)
    node.children.forEach((child) => {
      recurseJson(child)
    })
  }
  recurseJson(json, 0)
  return csv
};

module.exports = {
  convertJsonToCsv
};


console.log(convertJsonToCsv(sampleData))