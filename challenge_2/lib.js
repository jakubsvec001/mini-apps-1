var sampleData = {
  firstName: "Joshie",
  lastName: "Wyattson",
  county: "San Mateo",
  city: "",
  role: "Broker",
  sales: 1000000,
  children: [
    {
      firstName: "Beth Jr.",
      lastName: "Johnson",
      county: "San Mateo",
      city: "Pacifica",
      role: "Manager",
      sales: 2900000,
      children: [
        {
          firstName: "Smitty",
          lastName: "Won",
          county: "San Mateo",
          city: "Redwood City",
          role: "Sales Person",
          sales: 4800000,
          children: []
        },
        {
          firstName: "Allen",
          lastName: "Price",
          county: "San Mateo",
          city: "Burlingame",
          role: "Sales Person",
          sales: 2500000,
          children: []
        }
      ]
    },
    {
      firstName: "Beth",
      lastName: "Johnson",
      county: "San Francisco",
      city: "San Francisco",
      role: "Broker/Sales Person",
      sales: 7500000,
      children: []
    }
  ]
};

var sampleData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 100,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 29,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 48,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 25,
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
    "sales": 75,
    "children": []
  }
]
}

const convertJsonToCsv = (json, filterCb = null) => {
  let csv = [["uuid", ...Object.keys(json).slice(0, -1)]];
  let uuid = 0;
  const recurseJson = node => {
    let rowBuild = [uuid];
    let filteredFlag = false;
    let column;
    let value;
    for (let key in node) {
      if (node[key] && key !== "children") {
        // if a filterCb is provided...
        console.log(node[key])
        if (filterCb) {
          column = key;
          value = node[key];
          // ...and if the filter returns true, break out of loop
          if (filterCb(column, value)) {
            filteredFlag = true;
            break;
          }
        }
        // if no filterCb, or if filterCb returns a false filter match, continue building row.
        rowBuild.push(node[key]);
      } else if (key !== "children") {
        // if the value is falsy, convert to null entry
        rowBuild.push(null);
      }
    }
    // if filterCb and filterCb did not return true, continue recursion
    if (!filteredFlag) {
      uuid++;
      csv.push(rowBuild);
      node.children.forEach(child => {
        recurseJson(child);
      });
    }
  };
  recurseJson(json);
  return csv;
};

module.exports = {
  convertJsonToCsv
};

console.log(convertJsonToCsv(sampleData))
console.log(
  convertJsonToCsv(sampleData, (column, value) => {
    return column === "sales" && value < 26;
  })
);
