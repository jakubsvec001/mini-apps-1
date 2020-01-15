class Controller {
  constructor() {
    this.JSONtext = document.getElementById('json-input');
    this.JSONtext.oninput = e => {
      model.updateJson(e.target.value)
      console.log(model.jsonString)
    };
    this.csvText= document.getElementById('csv-output');
    this.submitButton = document.querySelector('.submitJSON')
    this.submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(model.json)
        model.convert()
      })
  }

  download() {

  }

  renderCSV() {
    this.csvText = model.csv;
  }
}

console.log('controller connected')