class Model {
  constructor() {
    this.json = "";
    this.csv = "";
  }

  updateJson(json) {
    this.json = json;
  }

  convert() {
    fetch("/api/csvToJson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: this.jsonString
    })
      .then(data => data.text())
      .then(csv => {
        this.csv = csv;
        controller.renderCSV();
      });
  }
}

console.log('model connected')