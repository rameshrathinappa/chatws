const express = require('express')
const app = express()
const port = 3000

app.get('/getMessage', (request, response) => {

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: '< MySQL username >',
    password: '< MySQL password >',
    database: '<your database name>'
  });

  connection.connect();

  connection.query('SELECT * from < table name >', function (err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows);
      response.json({
        response: rows
      })
    }
    else
      console.log('Error while performing Query.');
  });

  connection.end();
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})