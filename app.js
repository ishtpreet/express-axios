const express = require('express')
const app = express()

const axios= require('axios');

app.get('/getfull', (req,res) => {
    axios.get('https://api.wowurl.me/getfull?shortid=d8_VMnro9')
    .then(function (response) {
      // handle success
    //   JSON.stringify(response);
    // var abc  = JSON.parse(response);
      console.log(response.data)
      res.send(response.data.body);
    })
    .catch(function (error) {
      // handle error
      res.send(error);
    })
    .then(function () {
      // always executed
    });
})

app.listen(3000);