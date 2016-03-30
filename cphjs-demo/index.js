var marked = require('marked'),
    classes = require('classes');

var btn = document.getElementById('convertBtn'),
    flipBtn = document.getElementById('flipBtn'),
    flipper = document.querySelector('.flip-container'),
    md = document.getElementById('markdown'),
    output = document.getElementById('output'),
    preview = document.getElementById('preview');

module.exports = init;

function init() {
  btn.addEventListener('click', convert);
  flipBtn.addEventListener('click', toggleView);
}

function convert() {
  var val = marked(md.value);
  preview.innerHTML = val;
}

function toggleView() {
  var val;
  if (classes(flipper).has('flipped')) {
    classes(flipper).remove('flipped')
  }
  else {
    val = marked(md.value);
    output.innerText = val;
    preview.innerHTML = val;
    classes(flipper).add('flipped')
  }
}