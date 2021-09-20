import express from 'express';

import words from '../word.js'

const app = express();

app.post('/', (req,res) => {

});

app.get('/word', (_,res) => {
  let length = words.length;
  let array = [];
  
  while(array.length !== 3) {
    let num = Math.floor(Math.random() * (length + 1));
    if(!array.includes(num)) {
      array.push(num);
    }
  }
  
  res.json(array.map(i => words[i]));
  
})

module.exports = {
  path: '/api',
  handler: app
}