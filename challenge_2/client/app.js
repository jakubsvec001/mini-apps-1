window.onload = () => {
  initialize();
};

let model;
let controller;

const initialize = () => {
  model = new Model();
  controller = new Controller();
};

console.log('app connected')