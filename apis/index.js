import express from 'express';

import words from '../word.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const cheerio = require('cheerio');
const axios = require('axios');

const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

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

app.post('/pickComment', (req,res) => {
  console.log(req.body)

  let url = req.body?.url;
  let number = req.body?.number || 0;
  let excludeList = (req.body?.exclude || '').split(',');

  getHtml(url)
    .then(html => {
      const $ = cheerio.load(html.data);
      const $bodyList = $('.comment_box')

      console.log($bodyList)
    })

})

module.exports = {
  path: '/api',
  handler: app
}